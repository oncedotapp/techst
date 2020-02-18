import { Injectable, ProviderScope } from '@graphql-modules/di';

import { prisma, User } from '../../generated/prisma-client';
import { Args } from './types';

@Injectable({ scope: ProviderScope.Application })
export default class UserProvider {
  public getUserByEmail(args: Args.User): Promise<User | null> {
    return prisma.user({ email: args.email });
  }
}
