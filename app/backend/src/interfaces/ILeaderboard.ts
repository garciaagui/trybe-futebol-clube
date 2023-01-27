import { INewMatch } from './IMatch';

export interface IGameStats {
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number;
}

export interface IScoreStats {
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
}

export interface ILeaderboardRaw {
  teamName: string,
  homeMatches?: INewMatch[],
  awayMatches?: INewMatch[],
}

export interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string
}
