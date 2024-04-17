import express, { Router } from 'express';
import passport from 'passport';
import crypto from 'crypto';
// import config from '../common/config';
// import { Pool } from 'pg';
// import { v4 as uuidv4 } from 'uuid';
import asyncHandler from 'express-async-handler';
import db from '../db';

const router: Router = express.Router();

router.get('/isloggedin', function (req, res) {
  if (req.user) {
    res.send('Yes. Welcome\n' + req.user);
  } else {
    res.send('No.');
  }
});

router.post('/login/password', function (req, res, next) {
  passport.authenticate('local', function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).end('Invalid user.');
    }
    req.login(user, next);
    res.status(200).end(user);
  })(req, res, next);
});

// router.post(
//   '/login/password',
//   passport.authenticate('local', {
//     failWithError: true,
//   }),
//   function (req, res) {
//     res.status(200).end();
//   },
// );

router.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).end();
  });
});

// router.post(
//   '/signup',
//   asyncHandler(async (req, res, next) => {
//     const salt = crypto.randomBytes(16);
//     crypto.pbkdf2(
//       req.body.password,
//       salt,
//       310000,
//       32,
//       'sha256',
//       function (err, hashedPassword) {
//         if (err) {
//           return next(err);
//         }

//         db.run(
//           'INSERT INTO users (email, hashed_password, salt) VALUES (?, ?, ?)',
//           [req.body.email, hashedPassword, salt],
//           function (err) {
//             if (err) {
//               return next(err);
//             }
//             const user = {
//               id: this.lastID,
//               username: req.body.email,
//             };
//             req.login(user, function (err) {
//               if (err) {
//                 return next(err);
//               }
//               res.redirect('/');
//             });
//           },
//         );
//       },
//     );
//   }),
// );

export default router;
