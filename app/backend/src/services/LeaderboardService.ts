import { QueryTypes } from 'sequelize';
import Team from '../database/models/Team';
import { ILeaderboard } from '../interfaces';
import { ILeaderboardService } from './interfaces/ILeaderboardService';
import { generalStandingsQuery, standingsByReferenceQueries } from '../utils/queries';
import model from '../database/models';

export default class LeaderboardService implements ILeaderboardService {
  constructor(private _model = model, private _teamModel = Team) {}

  public async getStandingsByReference(reference: 'home' | 'away'): Promise<ILeaderboard[]> {
    const data = await this._model
      .query(standingsByReferenceQueries[reference], {
        type: QueryTypes.SELECT,
      }) as ILeaderboard[];

    return data;
  }

  public async getGeneralStandings(): Promise<ILeaderboard[]> {
    const data = await this._model
      .query(generalStandingsQuery, {
        type: QueryTypes.SELECT,
      }) as ILeaderboard[];

    return data;
  }
}
