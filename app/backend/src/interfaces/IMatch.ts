export interface INewMatch {
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
}

export interface IMatch extends INewMatch {
  id: number,
  inProgress: boolean,
}

export interface IMatchMocked extends IMatch {
  homeTeam: {
    teamName: string
  },
  awayTeam: {
    teamName: string
  }
}
