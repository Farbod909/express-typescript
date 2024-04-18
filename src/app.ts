import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import asyncHandler from 'express-async-handler';
import 'express-async-errors';

import config from './common/config';
import movementsRouter from './routes/movements.route';
import usersRouter from './routes/users.route';
import { errorHandler } from './middleware/errors';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/movements', movementsRouter);
app.use('/users', usersRouter);

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
