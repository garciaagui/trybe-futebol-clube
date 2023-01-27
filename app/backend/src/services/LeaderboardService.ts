import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { ILeaderboardRaw,
  ILeaderboard, IGameStats, IScoreStats, INewMatch } from '../interfaces';
import { ILeaderboardService } from './interfaces/ILeaderboardService';

export default class LeaderboardService implements ILeaderboardService {
  constructor(private _matchModel = Match, private _teamModel = Team) {}

  private static generateGamesStats(array: ILeaderboardRaw[], reference: 'home' | 'away') {
    const opposite = reference === 'home' ? 'away' : 'home';
    const stats = array.reduce((acc: IGameStats, curr: INewMatch | any) => {
      if (curr[`${reference}TeamGoals`] > curr[`${opposite}TeamGoals`]) {
        acc.totalVictories += 1;
        acc.totalPoints += 3;
      } else if (curr[`${reference}TeamGoals`] < curr[`${opposite}TeamGoals`]) {
        acc.totalLosses += 1;
      } else {
        acc.totalDraws += 1;
        acc.totalPoints += 1;
      }

      return acc;
    }, { totalPoints: 0,
      totalGames: array.length,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0 });

    return stats;
  }

  private static generateScoreStats(array: ILeaderboardRaw[], reference: 'home' | 'away') {
    const opposite = reference === 'home' ? 'away' : 'home';

    const stats = array.reduce((acc: IScoreStats, curr: any) => {
      acc.goalsFavor += curr[`${reference}TeamGoals`];
      acc.goalsOwn += curr[`${opposite}TeamGoals`];
      acc.goalsBalance += (curr[`${reference}TeamGoals`] - curr[`${opposite}TeamGoals`]);
      return acc;
    }, { goalsFavor: 0, goalsOwn: 0, goalsBalance: 0 });

    return stats;
  }

  private static sortByPoints(e1: ILeaderboard, e2: ILeaderboard) {
    if (e1.totalPoints > e2.totalPoints) return -1;
    if (e1.totalPoints < e2.totalPoints) return 1;
    return 0;
  }

  private static sortByVictories(e1: ILeaderboard, e2: ILeaderboard) {
    if (e1.totalVictories > e2.totalVictories) return -1;
    if (e1.totalVictories < e2.totalVictories) return 1;
    return 0;
  }

  private static sortByGoalsBalance(e1: ILeaderboard, e2: ILeaderboard) {
    if (e1.goalsBalance > e2.goalsBalance) return -1;
    if (e1.goalsBalance < e2.goalsBalance) return 1;
    return 0;
  }

  private static sortByGoalsFavor(e1: ILeaderboard, e2: ILeaderboard) {
    if (e1.goalsFavor > e2.goalsFavor) return -1;
    if (e1.goalsFavor < e2.goalsFavor) return 1;
    return 0;
  }

  private static sortByGoalsOwn(e1: ILeaderboard, e2: ILeaderboard) {
    if (e1.goalsOwn < e2.goalsOwn) return -1;
    if (e1.goalsOwn > e2.goalsOwn) return 1;
    return 0;
  }

  private static sortByMultipleCriteria(...sortFuncs:any[]) {
    return (e1: ILeaderboard, e2: ILeaderboard) => {
      for (let i = 0; i < sortFuncs.length; i += 1) {
        const res = sortFuncs[i](e1, e2);
        if (res !== 0) {
          return res;
        }
      }
    };
  }

  private static arrangeDate(
    array: ILeaderboardRaw[] | any[],
    reference: 'home' | 'away',
  ) {
    const matches = reference === 'home' ? 'homeMatches' : 'awayMatches';
    const newArray = array.map((e) => {
      const gamesStats = LeaderboardService.generateGamesStats(e[matches], reference);
      const scoreStats = LeaderboardService.generateScoreStats(e[matches], reference);
      const efficiency = ((gamesStats.totalPoints / (gamesStats.totalGames * 3)) * 100).toFixed(2);

      return { name: e.teamName, ...gamesStats, ...scoreStats, efficiency };
    });

    return newArray
      .sort(LeaderboardService.sortByMultipleCriteria(
        LeaderboardService.sortByPoints,
        LeaderboardService.sortByVictories,
        LeaderboardService.sortByGoalsBalance,
        LeaderboardService.sortByGoalsFavor,
        LeaderboardService.sortByGoalsOwn,
      ));
  }

  public async getStandingsByReference(reference: 'home' | 'away'): Promise<ILeaderboard[]> {
    const data = await this._teamModel.findAll({
      include: [
        { model: Match,
          as: reference === 'home' ? 'homeMatches' : 'awayMatches',
          where: { inProgress: false },
          attributes: { exclude: ['id', 'inProgress'] },
        },
      ],
    });

    return LeaderboardService
      .arrangeDate(data as unknown as ILeaderboardRaw[], reference);
  }
}
