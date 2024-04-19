import User from './model';

export interface UserDetailRequest {
  userId: string;
}

export interface UserDetailResponse {
  user: User;
}

export interface UserCreateRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserCreateResponse {
  user: User;
}
