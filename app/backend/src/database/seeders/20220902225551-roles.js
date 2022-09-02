'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          id: 1,
          role_name: 'user',
        },
        {
          id: 2,
          role_name: 'admin'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
