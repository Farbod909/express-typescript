import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import crypto from 'crypto';
import db from '../../db';

// passport.use(
//   new LocalStrategy(function verify(email: string, password: string, cb) {
//     db.get(
//       'SELECT * FROM users WHERE email = ?',
//       [email],
//       function (err, row: any) {
//         if (err) {
//           return cb(err);
//         }
//         if (!row) {
//           return cb(null, false);
//         }

//         crypto.pbkdf2(
//           password,
//           row.salt,
//           310000,
//           32,
//           'sha256',
//           function (err, hashedPassword) {
//             if (err) {
//               return cb(err);
//             }
//             if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
//               return cb(null, false);
//             }
//             return cb(null, row);
//           },
//         );
//       },
//     );
//   }),
// );

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
