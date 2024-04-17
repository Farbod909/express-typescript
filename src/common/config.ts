import * as dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: parseInt(process.env.PORT!) || 3000,
  SESSION: {
    SECRET: process.env.SESSION_SECRET!,
    AGE: parseInt(process.env.SESSION_AGE!),
  },
  PROD: process.env.ENV === 'PROD',
  DEV: process.env.ENV === 'DEV',
  DATABASE_URL: process.env.DATABASE_URL!,
};
