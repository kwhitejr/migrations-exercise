'use strict';

var faker = require('faker');

module.exports = {
  up: function (queryInterface, Sequelize) {
    var users = [];
    for (var i = 0; i<10000; i++) {
      users.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        bio: faker.lorem.sentence(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        email: faker.internet.email()
      });
    }
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
