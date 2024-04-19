import { UserDetailRequest, UserDetailResponse } from '../interface';
import User, { getUserById } from '../model';

export default async function userDetailHandler(
  request: UserDetailRequest,
): Promise<UserDetailResponse> {
  const user: User = await getUserById(request.userId);
  return { user: user };
}
