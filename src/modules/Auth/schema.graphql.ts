import { gql } from 'apollo-server';

export default gql`

type AuthPayload {
  isSignup: Boolean!
  user: User!
}

type Mutation {
  emailAuth(email: String!): Boolean!
  validateCode(email: String!, code: String!): AuthPayload!
}

`;
