import { ITeam } from '../../interfaces';

export interface ITeamService {
  getAll(): Promise<ITeam[]>;
}
