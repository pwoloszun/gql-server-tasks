const { find, includes, filter, merge } = require('lodash');
const { delayedValue } = require('../utils/delayUtils');

const DELAY_IN_MS = 50;

function createRepo(name, entities) {
  let _logOps = true;
  return {
    name,

    get logOps() {
      return _logOps;
    },

    set logOps(nextLogOps) {
      _logOps = nextLogOps;
    },

    async getAll() {
      logIf(_logOps, `${name}Repo::getAll`);
      return delayedValue(entities, DELAY_IN_MS);
    },

    async getById(id) {
      logIf(_logOps, `${name}Repo::getById`, id);
      return delayedValue(find(entities, { id }), DELAY_IN_MS);
    },

    async getAllByIds(ids) {
      logIf(_logOps, `${name}Repo::getAllByIds`, ids);
      const results = filter(entities, (entity) => {
        return includes(ids, entity.id);
      });
      return delayedValue(results, DELAY_IN_MS);
    },

    async find(params) {
      logIf(_logOps, `${name}Repo::find`, params);
      const result = find(entities, params);
      return delayedValue(result, DELAY_IN_MS);
    },

    async findAll(params) {
      logIf(_logOps, `${name}Repo::findAll`, params);
      const results = filter(entities, params);
      return delayedValue(results, DELAY_IN_MS);
    },

    async findAllIn(property, values) {
      logIf(_logOps, `${name}Repo::findAllIn`, { property, values });
      const results = filter(entities, (entity) => {
        return includes(values, entity[property]);
      });
      return delayedValue(results, DELAY_IN_MS);
    },

    // CREATE
    async createEntity(params) {
      const id = Math.floor(Math.random() * 1000000) + '';
      const newEntity = merge({}, params, { id });
      entities.push(newEntity);
      return newEntity;
    }

  };
}

module.exports.createRepo = createRepo;

// private

function logIf(_logOps, msg, params) {
  if (_logOps) {
    console.log(`\n\tRepo #=== ${msg}`, params, '===#\n');
  }
}
