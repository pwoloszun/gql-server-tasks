const { gql } = require('apollo-server');
const { usersRepo, addressesRepo, projectUsersRepo, projectsRepo } = require('../repositories');
const { addressesLoader } = require('../dataLoaders/addressesLoader');
const { map } = require('lodash');

const typeDefs = gql`

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    title: String
    description: String
    phone: String

    address: Address
    projects: [Project!]!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  input CreateUserParams {
    firstName: String!
    lastName: String!
    emailDomain: String!
  }

  type Mutation {
    createUser(params: CreateUserParams!): User!
  },

`;

const resolvers = {
  Query: {
    users: () => {
      return usersRepo.getAll();
    },

    user: (parent, args, context, info) => {
      return usersRepo.getById(args.id);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const { firstName, lastName, emailDomain } = args.params;
      const username = `${firstName[0].toLowerCase()}.${lastName.toLowerCase()}`;
      const email = `${username}@${emailDomain}`;
      const entityParams = { firstName, lastName, username, email };
      return usersRepo.createEntity(entityParams);
    },
  },

  User: {
    address: (parent, args) => {
      if (parent.addressId) {
        // return addressesRepo.getById(parent.addressId); // n + 1 problem
        return addressesLoader.load(parent.addressId); // FIX
      } else {
        return null;
      }
    },

    projects: async (parent, args) => {
      const projectUsersLinks = await projectUsersRepo.findAll({ userIds: [parent.id] });
      const projectIds = map(projectUsersLinks, 'projectId');
      return projectsRepo.getAllByIds(projectIds);
    },

  },

};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
