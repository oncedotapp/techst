import { gql } from 'apollo-server';

export default gql`

type User {
  id: ID!
  email: String!
  name: String
  description: String
  picture: String
}

type Query {
  user(email: String!): User
}

`;
