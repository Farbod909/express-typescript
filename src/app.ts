import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import asyncHandler from 'express-async-handler';
import 'express-async-errors';

import config from './common/config';
import movementRouter from './routes/movement.route';
import { newUser, getUserById } from './models/user.model';
import { errorHandler } from './middleware/errors';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/movements', movementRouter);

app.get(
  '/',
  asyncHandler(async (req, res) => {
    res.end('Hello world.');
  }),
);

app.post(
  '/newUser',
  asyncHandler(async (req, res) => {
    await newUser(
      req.body.email,
      req.body.password,
      req.body.firstName,
      req.body.lastName,
    );
    res.send('done');
  }),
);

app.get(
  '/users/:id',
  asyncHandler(async (req, res) => {
    const user = await getUserById(req.params.id);
    res.send(user);
  }),
);

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
