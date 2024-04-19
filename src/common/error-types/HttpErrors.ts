import BaseError from './BaseError';

abstract class BaseHttpError extends BaseError {
  private readonly _code: number;
  private readonly _message: string;
  constructor(code: number, message: string) {
    super(message);

    this._code = code;
    this._message = message;

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BaseHttpError.prototype);
  }

  get statusCode() {
    return this._code;
  }

  get message() {
    return this._message;
  }
}

export class BadRequestError extends BaseHttpError {
  private static readonly _statusCode = 400;
  constructor(message: string) {
    super(BadRequestError._statusCode, message || 'Bad request');
  }
}

export class InternalError extends BaseHttpError {
  private static readonly _statusCode = 500;
  constructor(message: string) {
    super(InternalError._statusCode, message || 'Server error');
  }
}
