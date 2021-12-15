const { fake } = require('faker');
const { sample } = require('lodash');
const { ADDRESSES } = require('../entities/addresses');
const { generateEntitiesWithDependencies } = require('./generateEntities');

function generateUsers() {
  const deps = ADDRESSES.map((addr) => {
    return { addressId: addr.id };
  });
  return generateEntitiesWithDependencies(deps, generateSingleUser, 1000);
}

function generateSingleUser(id) {
  const firstName = fake('{{name.firstName}}');
  const lastName = fake('{{name.lastName}}');
  const username = firstName[0].toLowerCase() + '.' + lastName.toLowerCase();
  const email = username + '@' + generateEmailDomain();
  return {
    id,
    firstName,
    lastName,
    username,
    email,
    title: fake('{{name.jobTitle}}'),
    description: fake('{{name.jobDescriptor}}'),
    phone: fake('{{phone.phoneNumber}}'),
  };
}

const emailDomains = ['hotmail.com', 'gmail.com', 'yahoo.com'];
function generateEmailDomain() {
  return sample(emailDomains);
}

module.exports.generateUsers = generateUsers;
