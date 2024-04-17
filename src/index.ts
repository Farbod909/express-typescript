import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';

import config from './common/config';
import authRouter from './routes/auth.route';
import movementRouter from './routes/movement.route';

const app = express();

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
