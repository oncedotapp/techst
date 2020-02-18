import { User } from '../../generated/prisma-client';

export namespace Args {
  export type EmailAuth = {
    email: string;
  };
  export type ValidateCode = {
    email: string;
    code: string;
  };
}

export type AuthPayload = {
  isSignup: boolean;
  user: User;
};
