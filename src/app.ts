import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import config from './common/config';
import movementsRouter from './movements/routes';
import usersRouter from './users/routes';
import { errorHandler } from './common/middleware/errorHandler';

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
