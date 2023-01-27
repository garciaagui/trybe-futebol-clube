import { ILeaderboard, ILeaderboardRaw } from "../../interfaces";

const mockedHomeStandingsRaw: ILeaderboardRaw[] = [
  {
    teamName: 'Corinthians',
    homeMatches: [
      {
        homeTeamId: 4,
        homeTeamGoals: 3,
        awayTeamId: 11,
        awayTeamGoals: 0
      },
      {
        homeTeamId: 4,
        homeTeamGoals: 3,
        awayTeamId: 3,
        awayTeamGoals: 1
      }
    ]
  },
  {
    teamName: 'Palmeiras',
    homeMatches: [
      {
        homeTeamId: 12,
        homeTeamGoals: 2,
        awayTeamId: 6,
        awayTeamGoals: 2
      },
      {
        homeTeamId: 12,
        homeTeamGoals: 4,
        awayTeamId: 5,
        awayTeamGoals: 2
      },
      {
        homeTeamId: 12,
        homeTeamGoals: 4,
        awayTeamId: 8,
        awayTeamGoals: 1
      }
    ]
  },
  {
    teamName: 'Santos',
    homeMatches: [
      {
        homeTeamId: 14,
        homeTeamGoals: 2,
        awayTeamId: 16,
        awayTeamGoals: 1
      },
      {
        homeTeamId: 14,
        homeTeamGoals: 5,
        awayTeamId: 11,
        awayTeamGoals: 1
      },
      {
        homeTeamId: 14,
        homeTeamGoals: 2,
        awayTeamId: 4,
        awayTeamGoals: 1
      }
    ]
  },
]

const mockedHomeStandings: ILeaderboard[] = [
  {
    name: "Santos",
    totalPoints: 9,
    totalGames: 3,
    totalVictories: 3,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 9,
    goalsOwn: 3,
    goalsBalance: 6,
    efficiency: "100.00"
  },
  {
    name: "Palmeiras",
    totalPoints: 7,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 10,
    goalsOwn: 5,
    goalsBalance: 5,
    efficiency: "77.78"
  },
  {
    name: "Corinthians",
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 6,
    goalsOwn: 1,
    goalsBalance: 5,
    efficiency: "100.00"
  }
];

const mockedAwayStandingsRaw: ILeaderboardRaw[] = [
  {
    teamName: "Santos",
    awayMatches: [
      {
        homeTeamId: 9,
        homeTeamGoals: 1,
        awayTeamId: 14,
        awayTeamGoals: 1
      },
      {
        homeTeamId: 10,
        homeTeamGoals: 2,
        awayTeamId: 14,
        awayTeamGoals: 2
      }
    ]
  },
  {
    teamName: "Palmeiras",
    awayMatches: [
      {
        homeTeamId: 1,
        homeTeamGoals: 0,
        awayTeamId: 12,
        awayTeamGoals: 3
      },
      {
        homeTeamId: 3,
        homeTeamGoals: 0,
        awayTeamId: 12,
        awayTeamGoals: 4
      }
    ]
  },
  {
    teamName: "Corinthians",
    awayMatches: [
      {
        homeTeamId: 6,
        homeTeamGoals: 0,
        awayTeamId: 4,
        awayTeamGoals: 1
      },
      {
        homeTeamId: 9,
        homeTeamGoals: 0,
        awayTeamId: 4,
        awayTeamGoals: 4
      },
      {
        homeTeamId: 14,
        homeTeamGoals: 2,
        awayTeamId: 4,
        awayTeamGoals: 1
      }
    ]
  },
]

const mockedAwayStandings: ILeaderboard[] = [
  {
    name: "Palmeiras",
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 7,
    goalsOwn: 0,
    goalsBalance: 7,
    efficiency: "100.00"
  },
  {
    name: "Corinthians",
    totalPoints: 6,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 6,
    goalsOwn: 2,
    goalsBalance: 4,
    efficiency: "66.67"
  },
  {
    name: "Santos",
    totalPoints: 2,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 0,
    goalsFavor: 3,
    goalsOwn: 3,
    goalsBalance: 0,
    efficiency: "33.33"
  },
]

const mockedGeneralStandings: ILeaderboard[] = [
  {
    name: "Palmeiras",
    totalPoints: 13,
    totalGames: 5,
    totalVictories: 4,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 17,
    goalsOwn: 5,
    goalsBalance: 12,
    efficiency: "86.67"
  },
  {
    name: "Corinthians",
    totalPoints: 12,
    totalGames: 5,
    totalVictories: 4,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 12,
    goalsOwn: 3,
    goalsBalance: 9,
    efficiency: "80.00"
  },
  {
    name: "Santos",
    totalPoints: 11,
    totalGames: 5,
    totalVictories: 3,
    totalDraws: 2,
    totalLosses: 0,
    goalsFavor: 12,
    goalsOwn: 6,
    goalsBalance: 6,
    efficiency: "73.33"
  },
]

export {
  mockedHomeStandingsRaw,
  mockedHomeStandings,
  mockedAwayStandingsRaw,
  mockedAwayStandings,
  mockedGeneralStandings
};