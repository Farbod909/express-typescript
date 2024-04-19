import User, { newUser } from '../model';
import { UserCreateRequest, UserCreateResponse } from '../interface';

export default async function userCreateHandler(
  request: UserCreateRequest,
): Promise<UserCreateResponse> {
  const user: User = await newUser(
    request.email,
    request.password,
    request.firstName,
    request.lastName,
  );
  return { user: user };
}
