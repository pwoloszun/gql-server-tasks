const { fake } = require('faker');
const { sampleSize, random, times } = require('lodash');
const { USERS } = require('../entities/users');
const { PROJECTS } = require('../entities/projects');
const { generateEntitiesWithDependencies } = require('./generateEntities');

function generateProjectUsersLinks() {
  const deps = [
    { userIds: getSampleUserIds(2) },
    { userIds: getSampleUserIds(1) },
    { userIds: [] },
  ];
  times(5, () => {
    const size = random(4, USERS.length - 1);
    deps.push({
      userIds: getSampleUserIds(size)
    });
  });
  return generateEntitiesWithDependencies(deps, generateSingleProjectUsersLink, 10);
}

function generateSingleProjectUsersLink(id, index) {
  return {
    id,
    projectId: PROJECTS[index].id
  };
}

function getSampleUserIds(size) {
  const usersSample = sampleSize(USERS, size);
  return usersSample.map((user) => user.id);
}

module.exports.generateProjectUsersLinks = generateProjectUsersLinks;
