import { GraphQLModule } from '@graphql-modules/core';

import RedisModule from '../Redis';
import MailModule from '../Mail';
import UserModule from '../User';

import AuthProvider from './provider';
import resolvers from './resolvers';

import typeDefs from './schema.graphql';

export default new GraphQLModule({
  name: 'Auth',
  imports: [RedisModule, MailModule, UserModule],
  providers: [AuthProvider],
  resolvers,
  typeDefs,
});
