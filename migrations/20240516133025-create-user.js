'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        unique: true
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW
      },
      deletedAt: {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};