const seedPost = require('./category-seeds');
const seedUser = require('./product-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  
  process.exit(0);
};

seedAll();