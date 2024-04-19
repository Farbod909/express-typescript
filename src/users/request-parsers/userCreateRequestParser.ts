import { Request } from 'express';
import { UserCreateRequest } from '../interface';

export default function parseUserCreateRequest(
  req: Request,
): UserCreateRequest {
  return {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.first_name,
    lastName: req.body.last_name,
  };
}
