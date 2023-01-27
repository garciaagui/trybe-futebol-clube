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
    teamName: "Napoli - SC",
    awayMatches: [
      {
        homeTeamId: 4,
        homeTeamGoals: 3,
        awayTeamId: 11,
        awayTeamGoals: 0
      },
      {
        homeTeamId: 14,
        homeTeamGoals: 5,
        awayTeamId: 11,
        awayTeamGoals: 1
      },
      {
        homeTeamId: 3,
        homeTeamGoals: 2,
        awayTeamId: 11,
        awayTeamGoals: 0
      }
    ]
  },
  {
    teamName: "Botafogo",
    awayMatches: [
      {
        homeTeamId: 13,
        homeTeamGoals: 1,
        awayTeamId: 3,
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
    teamName: "Cruzeiro",
    awayMatches: [
      {
        homeTeamId: 8,
        homeTeamGoals: 2,
        awayTeamId: 5,
        awayTeamGoals: 1
      },
      {
        homeTeamId: 12,
        homeTeamGoals: 4,
        awayTeamId: 5,
        awayTeamGoals: 2
      },
      {
        homeTeamId: 10,
        homeTeamGoals: 1,
        awayTeamId: 5,
        awayTeamGoals: 3
      }
    ]
  },
]

const mockedAwayStandings: ILeaderboard[] = [
  {
    name: "Napoli - SC",
    totalPoints: 9,
    totalGames: 3,
    totalVictories: 3,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 10,
    goalsOwn: 1,
    goalsBalance: 9,
    efficiency: "100.00"
  },
  {
    name: "Botafogo",
    totalPoints: 6,
    totalGames: 2,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 4,
    goalsOwn: 1,
    goalsBalance: 3,
    efficiency: "100.00"
  },
  {
    name: "Cruzeiro",
    totalPoints: 6,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 7,
    goalsOwn: 6,
    goalsBalance: 1,
    efficiency: "66.67"
  },
]


export { mockedHomeStandingsRaw, mockedHomeStandings, mockedAwayStandingsRaw, mockedAwayStandings };