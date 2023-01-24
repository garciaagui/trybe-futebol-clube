import { ITeam } from '../interfaces';
import Team from '../database/models/Team';
import { ITeamService } from './interfaces/ITeamService';

export default class TeamService implements ITeamService {
  constructor(private _model = Team) {}

  public async getAll(): Promise<ITeam[]> {
    const teams = await this._model.findAll();

    return teams;
  }
}
