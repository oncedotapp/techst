import { ModuleContext } from '@graphql-modules/core';

import { Empty } from '../_common/types';
import { Args, AuthPayload } from './types';

import AuthProvider from './provider';

export default {
  Mutation: {
    emailAuth: (_: Empty, args: Args.EmailAuth, { injector }: ModuleContext): Promise<boolean> => (
      injector.get(AuthProvider).emailAuth(args)),
    validateCode: (_: Empty, args: Args.ValidateCode, { injector }: ModuleContext): Promise<AuthPayload> => (
      injector.get(AuthProvider).validateCode(args)),
  },
};
