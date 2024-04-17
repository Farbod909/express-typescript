import * as dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: parseInt(process.env.PORT!) || 3000,
  PROD: process.env.ENV === 'PROD',
  DEV: process.env.ENV === 'DEV',
  DATABASE_URL: process.env.DATABASE_URL!,
};
