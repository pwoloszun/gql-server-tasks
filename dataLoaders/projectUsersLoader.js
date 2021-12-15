const DataLoader = require('dataloader');
const { find, map, reduce, concat, uniq, filter, includes } = require('lodash');

const { projectUsersRepo, usersRepo } = require('../repositories');

async function batchFunction(projectIds) {
  const projectUsersLinks = await projectUsersRepo.findAllIn('projectId', projectIds);

  const userIds2D = map(projectUsersLinks, 'userIds');
  const userIdsWithDupes = reduce(userIds2D, (memo, userIds) => {
    return concat(memo, userIds);
  }, []);
  const userIds = uniq(userIdsWithDupes);

  const users = await usersRepo.getAllByIds(userIds);

  return projectIds.map((projectId) => {
    const link = find(projectUsersLinks, { projectId });
    if (link) {
      return filter(users, (user) => {
        return includes(link.userIds, user.id);
      });
    } else {
      return [];
    }
  });
}

const projectUsersLoader = new DataLoader(batchFunction);

module.exports.projectUsersLinkLoader = projectUsersLoader;
