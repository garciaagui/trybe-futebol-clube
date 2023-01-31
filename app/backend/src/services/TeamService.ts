import { ITeam } from '../interfaces';
import Team from '../database/models/Team';
import { ITeamService } from './interfaces/ITeamService';
import TeamValidations from './validations/TeamValidations';
import { NotFoundException } from '../exceptions';

export default class TeamService implements ITeamService {
  constructor(private _model = Team) {}

  public async getAll(): Promise<ITeam[]> {
    const teams = await this._model.findAll();
    return teams;
  }

  public async getById(id: number): Promise<ITeam | null> {
    TeamValidations.validateId(id);

    const team = await this._model.findByPk(id);

    if (!team) throw new NotFoundException('Team not found');

    return team;
  }
}
