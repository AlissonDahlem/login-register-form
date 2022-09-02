'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING,
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
      createdAt: {
       type: Sequelize.DATE,
       field: 'created_at'
      }
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};