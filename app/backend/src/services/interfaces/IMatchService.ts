import { IMatch } from '../../interfaces';

export interface IMatchService {
  getAll(): Promise<IMatch[]>;
}
