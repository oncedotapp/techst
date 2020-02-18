import { ModuleContext } from '@graphql-modules/core';

import { User } from '../../generated/prisma-client';
import { Empty } from '../_common/types';

import UserProvider from './provider';
import { Args } from './types';

export default {
  Query: {
    user: (_: Empty, args: Args.User, { injector }: ModuleContext): Promise<User | null> => (
      injector.get(UserProvider).getUserByEmail(args)),
  },
};
