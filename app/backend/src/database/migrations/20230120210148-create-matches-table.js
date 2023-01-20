'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      home_team_id: {
        type: Sequelize.INTEGER,
        field: 'home_team_id',
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      home_team_goals: {
        type: Sequelize.INTEGER,
        field: 'home_team_goals',
        allowNull: false,
      },
      away_team_id: {
        type: Sequelize.INTEGER,
        field: 'away_team_id',
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
        field: 'away_team_goals',
        allowNull: false,
      },
      in_progress: {
        type: Sequelize.BOOLEAN,
        field: 'in_progress',
        allowNull: false,
      },
    })
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('matches');
  },
};
