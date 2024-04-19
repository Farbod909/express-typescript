import { Request } from 'express';
import { MovementDetailRequest } from '../interface';

export default function parseMovementDetailRequest(
  req: Request,
): MovementDetailRequest {
  return {
    movementId: req.params.id,
  };
}
