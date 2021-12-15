const DataLoader = require('dataloader');
const { find } = require('lodash');

const { nbaTeamsRepo } = require('../repositories');

async function batchFunction(ids) {
  // TODO 1: batch fetch NbaTeam entities

  // TODO 2: return mapped IDs to fetched NbaTeam entities
  return [];
}

const teamsLoader = new DataLoader(batchFunction);

module.exports.teamsLoader = teamsLoader;
