const { prettyPrint } = require('./prettyPrint');
const { generateAdresses } = require('./generateAddresses');
const { generateUsers } = require('./generateUsers');
const { generateProjects } = require('./generateProjects');
const { generateProjectUsersLinks } = require('./generateProjectUsersLinks');

// const data = generateAdresses(10);
// const data = generateUsers();
// const data = generateProjects();
const data = generateProjectUsersLinks();
console.log(prettyPrint(data));
