import { NextFunction, Request, Response } from 'express';
import BaseError from '../error-types/BaseError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Handled errors
  if (err instanceof BaseError) {
    const { statusCode, message } = err;

    return res.status(statusCode).send({ error_message: message });
  }

  // Unhandled errors
  console.error(JSON.stringify(err, null, 2));
  return res.status(500).send({ message: 'Something went wrong' });
};
