// eslint-disable-next-line prettier/prettier
import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = 'roles';

// eslint-disable-next-line prettier/prettier
export const Roles = (...roles :string []) => SetMetadata(ROLES_KEY, roles);
