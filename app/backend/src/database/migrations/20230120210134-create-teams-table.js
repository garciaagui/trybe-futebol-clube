'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      team_name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'team_name',
      },
    })
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('teams');
  },
};
