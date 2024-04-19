import { Request } from 'express';
import { MovementListRequest } from '../interface';

export default function parseMovementListRequest(
  req: Request,
): MovementListRequest {
  return {
    userId: req.body.user_id,
  };
}
