import { DataTypes, Model } from "sequelize";
import connection from './index'
import Team from "./Team";

class Match extends Model {
  declare id: number;
  declare home_team_id: number;
  declare home_team_goals: number;
  declare away_team_id: number;
  declare away_team_goals: number;
  declare in_progress: boolean;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  home_team_id: {
    type: DataTypes.INTEGER,
    field: 'home_team_id',
    allowNull: false,
  },
  home_team_goals: {
    type: DataTypes.INTEGER,
    field: 'home_team_goals',
    allowNull: false,
  },
  away_team_id: {
    type: DataTypes.INTEGER,
    field: 'away_team_id',
    allowNull: false,
  },
  away_team_goals: {
    type: DataTypes.INTEGER,
    field: 'away_team_goals',
    allowNull: false,
  },
  in_progress: {
    type: DataTypes.BOOLEAN,
    field: 'in_progress',
    allowNull: false,
  },
}, {
  sequelize: connection,
  tableName: 'matches',
  timestamps: false,
  underscored: false,
});


Match.belongsTo(Team, { foreignKey: 'home_team_id' });
Match.belongsTo(Team, { foreignKey: 'away_team_id' });

export default Match;