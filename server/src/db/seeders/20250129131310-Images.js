'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          title: 'Image-1',
          imagePath: 'http://localhost:3000/Image/1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Image-2',
          imagePath: 'http://localhost:3000/Image/2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Image-3',
          imagePath: 'http://localhost:3000/Image/3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Image-4',
          imagePath: 'http://localhost:3000/Image/4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Image-5',
          imagePath: 'http://localhost:3000/Image/5.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Image-6',
          imagePath: 'http://localhost:3000/Image/6.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
