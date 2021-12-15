const { gql } = require('apollo-server');
const { addressesRepo } = require('../repositories');

const typeDefs = gql`

  type Address {
    id: ID!
    zip: String
    city: String
    street: String
    phone: String
    country: String
  }

  type Query {
    addresses: [Address!]!
    address(id: ID!): Address
  }

`;

const resolvers = {
  Query: {
    addresses: () => addressesRepo.getAll(),

    address: (parent, args, context, info) => {
      return addressesRepo.getById(args.id);
    },
  },
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
