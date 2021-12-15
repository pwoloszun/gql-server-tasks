const { gql } = require('apollo-server');
const { usersRepo, addressesRepo, projectUsersRepo, projectsRepo } = require('../repositories');
const { addressesLoader } = require('../dataLoaders/addressesLoader');
const { map } = require('lodash');

const typeDefs = gql`

  type User {
    id: ID!
    
    # TODO scalar fields

    # TODO: 1-1 Address

    # TODO: 1-n Projects
    
  }

  # type Query {
    # TODO: 'users' query

    # TODO: 'user' by id query

  # }

  # TODO: input CreateUserParams 

  # TODO: mutation createUser(params: CreateUserParams!): User!

`;

const resolvers = {
  Query: {
    // TODO: 'users' query

    // TODO: 'user' by id query

  },

  // TTODO: mutations
  // Mutation: {},


  User: {
    // TODO: 1-1 Address

    // TODO: 1-n Projects

  },

};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
