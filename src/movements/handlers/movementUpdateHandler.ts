import { InternalError } from '../../common/error-types/HttpErrors';
import { MovementUpdateRequest, MovementUpdateResponse } from '../interface';

export default async function movementUpdateHandler(
  request: MovementUpdateRequest,
): Promise<MovementUpdateResponse> {
  throw new InternalError('Not implemented.');
}
