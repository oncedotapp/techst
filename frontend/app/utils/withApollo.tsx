import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { apolloClient } from '../apollo';

const ApolloDecorator = (storyFn: () => JSX.Element): JSX.Element => (
  <ApolloProvider client={apolloClient}>{storyFn()}</ApolloProvider>
);

export default ApolloDecorator;
