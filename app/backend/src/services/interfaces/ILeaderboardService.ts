import { ILeaderboard } from '../../interfaces';

export interface ILeaderboardService {
  getStandingsByReference(reference: 'home' | 'away'): Promise<ILeaderboard[]>;
}
