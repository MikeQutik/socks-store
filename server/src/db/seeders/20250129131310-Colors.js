'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          title: 'black',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'green',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'red',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'white',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'yellow',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
