import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import config from './common/config';
import movementRouter from './routes/movement';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/movements', movementRouter);

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
