'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Baskets', [
      {
      userId: 2,
      
    }
  ], {});
  
},

async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Baskets', null, {});
   
}
};
