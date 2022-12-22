'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addColumn('user', 'role', {
    type: Sequelize.DataTypes.ENUM,
    values: [
      'reviewer',
      'admin',
     ],
     defaultValue: 'reviewer'
   });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'role');
  }
};
