import { Request } from 'express';
import { UserDetailRequest } from '../interface';

export default function parseUserDetailRequest(
  req: Request,
): UserDetailRequest {
  return {
    userId: req.params.id,
  };
}
