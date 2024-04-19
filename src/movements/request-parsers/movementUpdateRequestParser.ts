import { Request } from 'express';
import { MovementUpdateRequest } from '../interface';

export default function parseMovementUpdateRequest(
  req: Request,
): MovementUpdateRequest {
  const request: MovementUpdateRequest = {
    movementId: req.body.movement_id,
  };
  if (req.body.name) {
    request.name = req.body.name;
  }
  if (req.body.description) {
    request.description = req.body.description;
  }
  if (req.body.recommended_warmup_sets) {
    request.recommended_warmup_sets = req.body.recommended_warmup_sets;
  }
  if (req.body.recommended_working_sets) {
    request.recommended_working_sets = req.body.recommended_working_sets;
  }
  if (req.body.recommended_rpe) {
    request.recommended_rpe = req.body.recommended_rpe;
  }
  if (req.body.recommended_rest_time) {
    request.recommended_rest_time = req.body.recommended_rest_time;
  }
  return request;
}
