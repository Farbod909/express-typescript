import BaseError from './BaseError';

export class BadRequestError extends BaseError {
  private static readonly _statusCode = 400;
  private readonly _code: number;
  private readonly _message: string;
  constructor(message: string) {
    super(message || 'Bad request');

    this._code = BadRequestError._statusCode;
    this._message = message;

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  get statusCode() {
    return this._code;
  }

  get message() {
    return this._message;
  }
}

export class InternalError extends BaseError {
  private static readonly _statusCode = 500;
  private readonly _code: number;
  private readonly _message: string;
  constructor(message: string) {
    super(message || 'Bad request');

    this._code = InternalError._statusCode;
    this._message = message;

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  get statusCode() {
    return this._code;
  }

  get message() {
    return this._message;
  }
}
