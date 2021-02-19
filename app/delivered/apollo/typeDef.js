const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: Int
    name: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    checkNumber(number: Int!): Boolean!
    fetchUser: [User]!
  }
`;

module.exports = typeDefs;
