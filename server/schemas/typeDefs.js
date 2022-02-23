const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: String
    savedBooks: [Book]!
  }
  type Book {
    bookId: String
    authors: [String]
    description: String!
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(description: String, title: String, bookId: String, image: String, link: String): User
   removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
