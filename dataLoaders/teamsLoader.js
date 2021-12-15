const DataLoader = require('dataloader');
const { find, map } = require('lodash');

const { nbaTeamsRepo } = require('../repositories');


// pseudo code
// teamIds === ['2', '3', '10', '1']

// result === [{id: '2'}, new Error('Cant find Team for ${teamid}'), '10', '1']

async function batchFunction(teamIds) {
  // TODO 1: batch fetch NbaTeam entities
  const teams = await nbaTeamsRepo.getAllByIds(teamIds);

  // TODO 2: return mapped IDs to fetched NbaTeam entities
  return map(teamIds, (teamId) => {
    const team = find(teams, { id: teamId });
    if (team) {
      return team;
    } else {
      return null;
    }
  });
}

const teamsLoader = new DataLoader(batchFunction);

module.exports.teamsLoader = teamsLoader;
