import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '../apollo';

const ApolloDecorator = (Component: () => JSX.Element): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <Component />
  </ApolloProvider>
);

export default ApolloDecorator;
