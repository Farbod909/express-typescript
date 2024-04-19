import { InternalError } from '../../common/error-types/HttpErrors';
import { MovementDeleteRequest, MovementDeleteResponse } from '../interface';

export default async function movementDeleteHandler(
  request: MovementDeleteRequest,
): Promise<MovementDeleteResponse> {
  throw new InternalError('Not implemented.');
}
