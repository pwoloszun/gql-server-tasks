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

    team: NbaTeam
  }

  type Query {
    nbaPlayers(ids: [ID!]): [NbaPlayer!]!
    nbaPlayer(id: ID!): NbaPlayer
  }

`;

const resolvers = {
  Query: {
    nbaPlayers: (parent, args) => {
      // console.log(`Q: nbaPlayers`, parent, args);
      const { ids = [] } = args;
      if (ids.length > 0) {
        return nbaPlayersRepo.getAllByIds(ids);
      } else {
        return nbaPlayersRepo.getAll();
      }
    },

    nbaPlayer: (parent, args) => {
      // console.log(`Q: nbaPlayer`, parent, args);
      return nbaPlayersRepo.getById(parent.id);
    },

  },

  NbaPlayer: {
    team: (parent, args) => {
      // console.log('E: NbaPlayer.team', parent, args);
      // return nbaTeamsRepo.getById(parent.team_id); // HERE: graphql n + 1 problem
      return teamsLoader.load(parent.team_id); // FIX
    }
  },
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;

