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
      roleId: {
        type: Sequelize.STRING,
        field: 'role_id'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
      createdAt: {
       type: Sequelize.DATE,
       field: 'created_at'
      },
      confirmed: {
        type: Sequelize.BOOLEAN
      },
      confirmationCode: {
        type: Sequelize.STRING,
        field: 'confirmation_code'
      }
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
