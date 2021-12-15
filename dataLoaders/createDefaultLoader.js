const DataLoader = require('dataloader');
const { find } = require('lodash');

function createDefaultLoader(repo, entityName) {
  return new DataLoader(async function batchFunction(ids) {
    const entities = await repo.getAllByIds(ids);
    return ids.map((id) => {
      const entity = find(entities, { id });
      return entity || new Error(`No ${entityName} for ${id}`);
    });
  });
}

module.exports.createDefaultLoader = createDefaultLoader;

