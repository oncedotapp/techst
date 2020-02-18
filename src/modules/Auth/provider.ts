import { UserInputError } from 'apollo-server';
import { Injectable, Inject, ProviderScope } from '@graphql-modules/di';

import { prisma } from '../../generated/prisma-client';
import { Args, AuthPayload } from './types';

import { RedisProvider, REDIS } from '../Redis';
import { MailProvider, MAIL } from '../Mail';

import {
  checkEmail,
  getRandomAvatar,
  getRandomLoginCode,
  getTokenFromCode,
  getRandomName,
} from '../_common/utils';

@Injectable({ scope: ProviderScope.Request })
export default class AuthProvider {
  constructor(
    @Inject(REDIS) private redis: RedisProvider,
    @Inject(MAIL) private mailer: MailProvider,
  ) {}

  /**
   * MUTATION
   */
  public async emailAuth(args: Args.EmailAuth): Promise<boolean> {
    let ok = true;
    const email = checkEmail(args.email);
    if (!email) {
      throw new UserInputError('Invalid email');
    }
    const user = await prisma.user({ email });
    const loginCode = getRandomLoginCode();
    const magicCode = getTokenFromCode(args.email, loginCode);

    await this.redis.setKeyVal(`loginCode:${magicCode}`, email, 'EX', 60 * 60 * 24); // Expires in 24h

    if (user === null) {
      await this.mailer.sendWelcomeMail({ to: email, loginCode, magicCode }).catch((err) => {
        ok = false;
        console.error('An error occured while sending welcome mail:', err);
      });
    } else {
      await this.mailer.sendLoginMail({ to: user.email, loginCode, magicCode }).catch((err) => {
        ok = false;
        console.error('An error occured while sending login mail:', err);
      });
    }
    return ok;
  }

  public async validateCode(args: Args.ValidateCode): Promise<AuthPayload> {
    const code = !args.email ? args.code : getTokenFromCode(args.email, args.code);
    const email = await this.redis.getKey(`loginCode:${code}`);

    if (email === null) {
      throw new UserInputError('This token does not exist or is no longer available, please try again');
    }

    const [user] = await Promise.all([prisma.user({ email }), this.redis.deleteKey(`loginCode:${code}`)]); // Do these in parallel
    if (user === null) {
      const newUser = await prisma.createUser({
        email,
        picture: getRandomAvatar(email),
        name: getRandomName(),
      });
      return { isSignup: true, user: newUser };
    }
    return { isSignup: false, user };
  }
}
