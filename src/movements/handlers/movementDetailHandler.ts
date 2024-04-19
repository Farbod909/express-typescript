import { InternalError } from '../../common/error-types/HttpErrors';
import { MovementDetailRequest, MovementDetailResponse } from '../interface';

export default async function movementDetailHandler(
  request: MovementDetailRequest,
): Promise<MovementDetailResponse> {
  throw new InternalError('Not implemented.');
}
