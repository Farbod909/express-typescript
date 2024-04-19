import Movement from './model';

export interface MovementListRequest {
  userId: string;
}

export interface MovementListResponse {
  movements: Movement[];
}

export interface MovementDetailRequest {
  movementId: string;
}

export interface MovementDetailResponse {
  movement: Movement;
}

export interface MovementCreateRequest {
  owner: string; // User ID of owner
  name: string;
  split: string;
  description?: string;
  recommended_warmup_sets?: string;
  recommended_working_sets?: string;
  recommended_rpe?: string;
  recommended_rest_time?: number; // in seconds
}

export interface MovementCreateResponse {
  movement: Movement;
}

export interface MovementUpdateRequest {
  movementId: string; // Which movement to update
  name?: string;
  split?: string;
  description?: string;
  recommended_warmup_sets?: string;
  recommended_working_sets?: string;
  recommended_rpe?: string;
  recommended_rest_time?: number; // in seconds
}

export interface MovementUpdateResponse {}

export interface MovementDeleteRequest {
  movementId: string;
}

export interface MovementDeleteResponse {}
