const DataLoader = require('dataloader');
const { find } = require('lodash');
const { addressesRepo } = require('../repositories');

async function batchFunction(ids) {
  // TODO 1: batch fetch entities

  // TODO 2: return mapped IDs to fetched entities
  return [];
}

const addressesLoader = new DataLoader(batchFunction);

module.exports.addressesLoader = addressesLoader;
