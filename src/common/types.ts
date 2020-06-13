export type GroupPermissionLevelKey = keyof typeof GroupPermissionLevelEnum;

export enum GroupPermissionLevelEnum {
  'Follower' = 0,
  'Friend' = 1,
  'Admin' = 2,
}
