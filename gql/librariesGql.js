const { gql } = require('apollo-server');
const { BOOKS, LIBRARIES } = require('../entities/libraries');

// Schema definition
const typeDefs = gql`

# A library has a branch and books
  type Library {
    branch: String!
    books: [Book!]
  }

  # A book has a title and author
  type Book {
    title: String!
    author: Author!
  }

  # An author has a name
  type Author {
    name: String!
  }

  # Queries can fetch a list of libraries
  type Query {
    libraries: [Library]
  }
`;

// Resolver map
const resolvers = {
  Query: {
    libraries() {
      return LIBRARIES;
    }
  },

  Library: {
    books(parent) {
      return BOOKS.filter(book => book.branch === parent.branch);
    }
  },

  Book: {
    author(parent, args) {
      // author returns an object with a "name" field
      return {
        name: parent.author
      };
    }
  }

};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
