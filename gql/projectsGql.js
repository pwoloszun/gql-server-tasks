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

    # TODO: 1-n Users

  }

  # type Query {
    # TODO: 'projects' by optional ids query 
    
    # TODO: 'project' by id query 

  # }

`;

const resolvers = {
  Query: {
    // TODO: 'projects' by optional ids query 

    // TODO: 'project' by id query 

  },

  Project: {
    // TODO: 1-n Users

  },

};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
