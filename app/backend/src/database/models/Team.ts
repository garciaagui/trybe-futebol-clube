import { DataTypes, Model } from 'sequelize';
import connection from './index';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {
  sequelize: connection,
  tableName: 'teams',
  timestamps: false,
  underscored: true,
});

export default Team;
