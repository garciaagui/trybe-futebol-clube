import { INewMatch, IMatch } from '../../interfaces';

export interface IMatchService {
  getAll(): Promise<IMatch[]>;
  getById(id: number): Promise<IMatch | null>
  getByInProgress(value: string | null): Promise<IMatch[]>;
  create(match: INewMatch): Promise<IMatch>
  updateInProgressStatus(id: number): Promise <number | null>
  updateScore(id: number, homeGoals: number, awayGoals: number): Promise <number | null>
}
