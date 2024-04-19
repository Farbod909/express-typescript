import { InternalError } from '../../common/error-types/HttpErrors';
import { UserListRequest, UserListResponse } from '../interface';
import { getAllUsers } from '../model';

export default async function userListHandler(
  request: UserListRequest,
): Promise<UserListResponse> {
  const users = await getAllUsers();
  return {
    users: users,
  };
}
