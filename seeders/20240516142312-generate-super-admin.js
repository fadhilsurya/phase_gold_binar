'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      full_name: 'Fadhil Surya',
      email: 'fsurya@binaracademy.org',
      address: 'jakarta',
      phone_number: '+62813100000000',
      gender: 'male',
      password: '',
      is_active: true,
      createdAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
