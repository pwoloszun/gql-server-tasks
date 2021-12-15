const { addressesRepo } = require('../repositories');
const { createDefaultLoader } = require('./createDefaultLoader');

const addressesLoader = createDefaultLoader(addressesRepo, 'Address');

module.exports.addressesLoader = addressesLoader;
