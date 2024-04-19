import { InternalError } from '../../common/error-types/HttpErrors';
import { MovementListRequest, MovementListResponse } from '../interface';

export default async function movementListHandler(
  request: MovementListRequest,
): Promise<MovementListResponse> {
  throw new InternalError('Not implemented.');
}
