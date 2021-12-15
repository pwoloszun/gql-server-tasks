const { gql } = require('apollo-server');
const { teamsLoader } = require('../dataLoaders/teamsLoader');
const { nbaTeamsRepo } = require('../repositories');
const { nbaPlayersRepo } = require('../repositories');

const typeDefs = gql`

  type NbaPlayer {
    id: ID!

    first_name: String
    last_name: String
    position: String
    height_feet: Int
    height_inches: Int
    weight_pounds: Int

    # TODO: 1-1 team

  }

  # type Query {
    # TODO: 'nbaPlayers' by optional ids query 

    # TODO: 'nbaPlayer' by id query 

  # }

`;

const resolvers = {
  Query: {
    // TODO: 'nbaPlayers' by optional ids query 

    // TODO: 'nbaPlayer' by id query 

  },

  // NbaPlayer: {
  //   // TODO: 1-1 team

  // },
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;

