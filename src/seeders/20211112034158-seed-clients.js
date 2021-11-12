'use strict';
const faker = require('faker');

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const clients = [...Array(100)].map((client) => (
    {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthdate: randomDate(new Date(1985, 0, 1), new Date(2002, 0, 1)),
      createdAt: new Date(),
      updatedAt: new Date()
    }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Clients', clients, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Clients', null, {});
  }
};
