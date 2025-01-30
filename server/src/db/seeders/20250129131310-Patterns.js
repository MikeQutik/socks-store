'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Patterns',
      [
        {
          title: 'Pattern-1',
          imagePath: 'http://localhost:3000/pattern/1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pattern-2',
          imagePath: 'http://localhost:3000/pattern/2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pattern-3',
          imagePath: 'http://localhost:3000/pattern/3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pattern-4',
          imagePath: 'http://localhost:3000/pattern/4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pattern-5',
          imagePath: 'http://localhost:3000/pattern/5.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pattern-6',
          imagePath: 'http://localhost:3000/pattern/6.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patterns', null, {});
  },
};
