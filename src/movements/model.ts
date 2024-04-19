export default interface Movement {
  id: string;
  owner: string; // User ID of owner
  name: string;
  split: string;
  description?: string;
  recommended_warmup_sets?: string;
  recommended_working_sets?: string;
  recommended_rpe?: string;
  recommended_rest_time?: number; // in seconds
}
