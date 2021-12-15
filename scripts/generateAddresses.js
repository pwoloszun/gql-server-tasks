const { fake } = require('faker');
const { generateEntities } = require('./generateEntities');

function generateAdresses(n) {
  return generateEntities(n, generateSingleAddress, 100000);
}

function generateSingleAddress(id) {
  return {
    id,
    zip: fake('{{address.zipCode}}'),
    city: fake('{{address.cityName}}'),
    street: fake('{{address.streetAddress}}'),
    phone: fake('{{phone.phoneNumber}}'),
    country: fake('{{address.country}}'),

  };
}

module.exports.generateAdresses = generateAdresses;
