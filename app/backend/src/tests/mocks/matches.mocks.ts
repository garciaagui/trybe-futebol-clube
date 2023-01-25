import { IMatch, IMatchMocked } from "../../interfaces";

const mockedMatches: IMatchMocked[] = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 2,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  }
];

const mockedMatchesInProgress: IMatchMocked[] = [
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Internacional"
    }
  },
  {
    id: 42,
    homeTeamId: 6,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: "Ferroviária"
    },
    awayTeam: {
      teamName: "Avaí/Kindermann"
    }
  }
];

const mockedFinishedMatches: IMatchMocked[] = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "São Paulo"
    },
    awayTeam: {
      teamName: "Grêmio"
    }
  },
  {
    id: 2,
    homeTeamId: 9,
    homeTeamGoals: 1,
    awayTeamId: 14,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: "Internacional"
    },
    awayTeam: {
      teamName: "Santos"
    }
  }
];

const mockedCorrectNewMatchReq = {
  homeTeamId: 16,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}

const mockedNewMatchWithSameTeamsReq = {
  homeTeamId: 8,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}

const mockedNewMatchWithInvalidTeamsReq = {
  homeTeamId: 9999,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}

const mockedNewMatchRes: IMatch = {
  ...mockedCorrectNewMatchReq,
  id: 1,
  inProgress: true
}

const mockedValidNewResultReq = {
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}

const mockedinvalidNewResultReq = {
  homeTeamGoals: 'x',
  awayTeamGoals: 2,
}

export {
  mockedMatches,
  mockedMatchesInProgress,
  mockedFinishedMatches,
  mockedCorrectNewMatchReq,
  mockedNewMatchWithSameTeamsReq,
  mockedNewMatchWithInvalidTeamsReq,
  mockedNewMatchRes,
  mockedValidNewResultReq,
  mockedinvalidNewResultReq,
}