const { gql } = require('apollo-server');
const { projectsRepo, usersRepo, projectUsersRepo } = require('../repositories');
const { projectUsersLinkLoader } = require('../dataLoaders/projectUsersLoader');

const typeDefs = gql`

  type Project {
    id: ID!
    name: String!
    department: String!
    description: String!
    imageUrl: String!

    users: [User!]!
  }

  type Query {
    projects(ids: [ID!]): [Project!]!
    project(id: ID!): Project
  }

`;

const resolvers = {
  Query: {
    projects: async (parent, args) => {
      const { ids = [] } = args;
      if (ids.length > 0) {
        return projectsRepo.getAllByIds(ids);
      } else {
        return projectsRepo.getAll();
      }
    },

    project: (parent, args) => {
      return projectsRepo.getById(args.id);
    },

  },

  Project: {
    users: async (parent, args) => {
      // const projectUsersLink = await projectUsersRepo.find({ projectId: parent.id });
      // if (projectUsersLink) {
      //   return usersRepo.getAllByIds(projectUsersLink.userIds);
      // } else {
      //   return [];
      // }
      return projectUsersLinkLoader.load(parent.id); // FIX: n + 1
    },
  },

};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
