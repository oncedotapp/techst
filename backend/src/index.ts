import 'reflect-metadata'; // So @Inject() works for providers

import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import {
  checkRequiredEnvVars,
  SERVER_PORT,
} from './config/env';

import AuthModule from './modules/Auth';
import UserModule from './modules/User';

checkRequiredEnvVars();

/**
 * Setup Express
 */
const app = express();

app.disable('x-powered-by');

/**
 * HealthCheck route
 */
app.get(
  '/the/check/is/a/lie',
  (_: express.Request, response: express.Response): express.Response => response.status(200).send('OK'),
);

/**
 * Setup ApolloServer
 */

// Merge required modules into one
const MergeModule = new GraphQLModule({
  name: 'TechstMerge',
  imports: [AuthModule, UserModule],
});

const { schema } = MergeModule;

const server = new ApolloServer({
  schema,
  context: (session): { req: express.Request; res: express.Response } => session, // Do not remove it or providers won't have access to the session.
});

server.applyMiddleware({
  app,
  path: '/',
});

app.listen(SERVER_PORT, () => {
  console.log(`🚀 Techst API ready at http://localhost:${SERVER_PORT}`);
});
