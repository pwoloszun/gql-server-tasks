const DataLoader = require('dataloader');
const { find } = require('lodash');

const { nbaTeamsRepo } = require('../repositories');

async function batchFunction(ids) {
  const teams = await nbaTeamsRepo.getAllByIds(ids);
  return ids.map((id) => {
    const team = find(teams, { id });
    return team || new Error(`No Team for ${id}`);
  });
}

const teamsLoader = new DataLoader(batchFunction);

// TODO: refactor
// const teamsLoader = createDefaultLoader(nbaTeamsRepo, 'NbaTeam');

module.exports.teamsLoader = teamsLoader;
