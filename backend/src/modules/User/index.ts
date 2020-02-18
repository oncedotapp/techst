import { GraphQLModule } from '@graphql-modules/core';

import UserProvider from './provider';
import resolvers from './resolvers';
import typeDefs from './schema.graphql';

export default new GraphQLModule({
  name: 'User',
  providers: [UserProvider],
  resolvers,
  typeDefs,
});
