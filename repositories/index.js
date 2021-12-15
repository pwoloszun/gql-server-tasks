const { createRepo } = require('./createRepo');

const { ADDRESSES } = require('../entities/addresses');
const { NBA_PLAYERS } = require('../entities/nbaPlayers');
const { NBA_TEAMS } = require('../entities/nbaTeams');
const { PERMISSIONS } = require('../entities/permissions');
const { PROJECTS } = require('../entities/projects');
const { USERS } = require('../entities/users');
const { PROJECT_USERS } = require('../entities/projectUsers');

const addressesRepo = createRepo('addresses', ADDRESSES);
const nbaPlayersRepo = createRepo('nbaPlayers', NBA_PLAYERS);
const nbaTeamsRepo = createRepo('nbaTeams', NBA_TEAMS);
const permissionsRepo = createRepo('permissions', PERMISSIONS);
const projectUsersRepo = createRepo('projectUsers', PROJECT_USERS);
const projectsRepo = createRepo('projects', PROJECTS);
const usersRepo = createRepo('users', USERS);

module.exports.addressesRepo = addressesRepo;
module.exports.nbaTeamsRepo = nbaTeamsRepo;
module.exports.nbaPlayersRepo = nbaPlayersRepo;
module.exports.permissionsRepo = permissionsRepo;
module.exports.projectsRepo = projectsRepo;
module.exports.projectUsersRepo = projectUsersRepo;
module.exports.usersRepo = usersRepo;
