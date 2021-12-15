const { gql } = require('apollo-server');
const { nbaPlayersRepo, nbaTeamsRepo } = require('../repositories');

const typeDefs = gql`

  type NbaTeam {
    id: ID!
    abbreviation: String
    city: String
    conference: String
    division: String
    full_name: String
    name: String

    # TODO: 1-n players
    players: [NbaPlayer!]!

  }

  type Query {
    nbaTeams: [NbaTeam!]!
    
    nbaTeam(id: ID!): NbaTeam
  }

`;

const resolvers = {
  Query: {
    nbaTeams: async (parent, args) => {
      // console.log(`Q: nbaTeams`, parent, args);
      const entites = await nbaTeamsRepo.getAll();
      return entites;
    },

    nbaTeam: (parent, args) => {
      // console.log(`Q: nbaTeam`, parent, args);
      return nbaTeamsRepo.getById(args.id);
    },
  },

  NbaTeam: {
    // TODO: 1-n players
    players: (parent, args) => {
      // console.log('par', parent);
      return nbaPlayersRepo.findAll({ team_id: parent.id });
    },
  },

};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
