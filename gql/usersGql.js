const { gql } = require('apollo-server');
const { usersRepo, addressesRepo, projectUsersRepo, projectsRepo } = require('../repositories');
const { addressesLoader } = require('../dataLoaders/addressesLoader');
const { map } = require('lodash');

const typeDefs = gql`

  type User {
    id: ID!
    
    # scalar fields
    firstName: String
    lastName: String
    username: String
    email: String
    title: String
    description: String
    phone: String

    # TODO: 1-1 Address
    address: Address

    # TODO: 1-n Projects
    
  }

  type Query {
    # TODO: 'users' query
    users: [User!]!

    # TODO: 'user' by id query
    user(id: ID!): User

  }

  # TODO: input CreateUserParams 

  # TODO: mutation createUser(params: CreateUserParams!): User!

`;

const resolvers = {
  Query: {
    // TODO: 'users' query
    users: async () => {
      return usersRepo.getAll();
    },
    // TODO: 'user' by id query
    user: async (parent, args) => {
      return usersRepo.getById(args.id);
    },
  },

  // TTODO: mutations
  // Mutation: {},


  User: {
    // TODO: 1-1 Address
    address: (parent) => {
      // WARNING: n + 1 problem
      return addressesRepo.getById(parent.addressId);
    },
    // TODO: 1-n Projects

  },

};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
