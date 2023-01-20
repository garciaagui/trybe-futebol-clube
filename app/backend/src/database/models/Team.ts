import { DataTypes, Model } from "sequelize";
import connection from './index'
import Match from "./Match";

class Team extends Model {
  declare id: number;
  declare team_name: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {
  sequelize: connection,
  tableName: 'teams',
  timestamps: false,
  underscored: false,
});

Team.hasMany(Match, { foreignKey: 'home_team_id' });
Team.hasMany(Match, { foreignKey: 'away_team_id' });

export default Team;