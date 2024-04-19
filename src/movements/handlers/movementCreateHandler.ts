import { InternalError } from '../../common/error-types/HttpErrors';
import { MovementCreateRequest, MovementCreateResponse } from '../interface';

export default async function movementCreateHandler(
  request: MovementCreateRequest,
): Promise<MovementCreateResponse> {
  throw new InternalError('Not implemented.');
}
