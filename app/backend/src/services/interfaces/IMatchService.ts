import { INewMatch, IMatch } from '../../interfaces';

export interface IMatchService {
  getAll(): Promise<IMatch[]>;
  getByInProgress(value: string | null): Promise<IMatch[]>;
  create(match: INewMatch): Promise<IMatch>
}
