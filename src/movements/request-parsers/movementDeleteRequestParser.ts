import { Request } from 'express';
import { MovementDeleteRequest } from '../interface';

export default function parseMovementDeleteRequest(
  req: Request,
): MovementDeleteRequest {
  return {
    movementId: req.body.movement_id,
  };
}
