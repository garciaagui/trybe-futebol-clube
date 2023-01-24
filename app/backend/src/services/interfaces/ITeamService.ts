import { ITeam } from '../../interfaces';

export interface ITeamService {
  getAll(): Promise<ITeam[]>;
  getById(id: number): Promise<ITeam | null>
}
