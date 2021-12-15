const DataLoader = require('dataloader');
const { find, map, reduce, concat, uniq, filter, includes } = require('lodash');

const { projectUsersRepo, usersRepo } = require('../repositories');

async function batchFunction(projectIds) {
  // TODO: batch find all projectUsersLinks (use: findAllIn(...))

  // TODO: batch get all users by IDs

  // TODO: return mapped projectIds to matching users
  return [];
}

const projectUsersLoader = new DataLoader(batchFunction);

module.exports.projectUsersLinkLoader = projectUsersLoader;
