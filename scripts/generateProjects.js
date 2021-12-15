const { fake } = require('faker');
const { generateEntities } = require('./generateEntities');

function generateProjects() {
  return generateEntities(15, generateSingleProject, 100);
}

function generateSingleProject(id) {
  return {
    id,
    name: fake('{{commerce.productName}}'),
    department: fake('{{commerce.department}}'),
    description: fake('{{commerce.productDescription}}'),
    imageUrl: fake('{{image.imageUrl}}'),
  };
}

module.exports.generateProjects = generateProjects;
