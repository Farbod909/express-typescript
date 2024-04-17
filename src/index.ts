import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import crypto from 'crypto';
import db from './db';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

import config from './common/config';
import authRouter from './routes/auth.route';
import movementRouter from './routes/movement.route';

const app = express();

passport.use(
  new LocalStrategy(function verify(email, password, cb) {
    console.log('hello');
    db.get(
      'SELECT * FROM users WHERE email = ?',
      [email],
      function (err, row: any) {
        if (err) {
          return cb(err);
        }
        if (!row) {
          return cb(null, false, {
            message: 'Incorrect email or password.',
          });
        }

        crypto.pbkdf2(
          password,
          row.salt,
          310000,
          32,
          'sha256',
          function (err, hashedPassword) {
            if (err) {
              return cb(err);
            }
            if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
              return cb(null, false, {
                message: 'Incorrect username or password.',
              });
            }
            return cb(null, row);
          },
        );
      },
    );
  }),
);

passport.serializeUser(function (user: any, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user: any, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// const connectionString = config.DATABASE_URL;
// const pool = new Pool({
//   connectionString,
//   application_name: '$ express-ts',
// });

// // Connect to database
// const client = await pool.connect();

const redisClient = createClient();
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
  prefix: 'myapp:',
});

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  session({
    cookie: {
      secure: config.PROD,
      httpOnly: config.PROD,
      maxAge: config.SESSION.AGE,
    },
    secret: config.SESSION.SECRET,
    resave: false,
    saveUninitialized: false,
    store: redisStore,
  }),
);
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/movements', movementRouter);

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
