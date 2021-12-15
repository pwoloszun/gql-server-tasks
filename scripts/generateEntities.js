const { merge } = require('lodash');

function generateEntities(n, generateEntityWithId, factor = 1) {
  const addresses = [];
  for (let index = 0; index < n; index++) {
    const id = (index + 1) * factor + '';
    const user = generateEntityWithId(id, index);
    addresses.push(user);
  }
  return addresses;
}

function generateEntitiesWithDependencies(dependencies, generateEntityWithId, factor = 1) {
  const entities = [];
  for (let index = 0; index < dependencies.length; index++) {
    const id = (index + 1) * factor + '';
    const entity = generateEntityWithId(id, index);
    const dep = dependencies[index];
    const entityWithDep = merge({}, entity, dep);
    entities.push(entityWithDep);
  }
  return entities;
}

module.exports.generateEntities = generateEntities;
module.exports.generateEntitiesWithDependencies = generateEntitiesWithDependencies;
