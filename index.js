const { ApolloServer } = require('apollo-server');

const { delayResponsePlugin } = require('./plugins/delayResponsePlugin');

const addressesGql = require('./gql/addressesGql');
const usersGql = require('./gql/usersGql');
const projectsGql = require('./gql/projectsGql');
const nbaTeamsGql = require('./gql/nbaTeamsGql');
const nbaPlayersGql = require('./gql/nbaPlayersGql');
const librariesGql = require('./gql/librariesGql');

const ALL_SCHEMAS = [
  addressesGql,
  usersGql,
  projectsGql,

  nbaTeamsGql,
  nbaPlayersGql,

  librariesGql,
];

function runApolloServer() {
  const server = new ApolloServer({
    typeDefs: ALL_SCHEMAS.map((schema) => schema.typeDefs),
    resolvers: ALL_SCHEMAS.map((schema) => schema.resolvers),
    introspection: true,
    plugins: [
      delayResponsePlugin,
    ]
  });

  server.listen({
    port: 6100
  }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

runApolloServer();
