export default abstract class BaseError extends Error {
  abstract readonly statusCode: number;
  abstract readonly message: string;

  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}
