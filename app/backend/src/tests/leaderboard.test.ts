import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import Team from '../database/models/Team';
import { Response } from 'superagent';
import {
  mockedHomeStandingsRaw,
  mockedHomeStandings,
  mockedAwayStandingsRaw,
  mockedAwayStandings,
  mockedGeneralStandings
} from './mocks/leaderboard.mocks'
import { ILeaderboardRaw } from '../interfaces';
import LeaderboardService from '../services/LeaderboardService';

const { app } = new App();
const { expect } = chai;
chai.use(chaiHttp);

describe('Testes de integração referentes a GET /leaderboard', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna com status HTTP 200 a classificação considerando todos as partidas', async () => {
      const findAllStub = sinon.stub(Team, "findAll")
      findAllStub.onCall(0).resolves(mockedHomeStandingsRaw as ILeaderboardRaw[] | any);
      findAllStub.onCall(1).resolves(mockedAwayStandingsRaw as ILeaderboardRaw[] | any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedGeneralStandings);
    });
  });
});

describe('Testes de integração referentes a GET /leaderboard/home', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna com status HTTP 200 a classificação considerando apenas jogos decididos em casa', async () => {
      sinon.stub(Team, "findAll").resolves(mockedHomeStandingsRaw as ILeaderboardRaw[] | any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/home')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedHomeStandings);
    });
  });
});

describe('Testes de integração referentes a GET /leaderboard/away', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna com status HTTP 200 a classificação considerando apenas jogos fora de casa', async () => {
      sinon.stub(Team, "findAll").resolves(mockedAwayStandingsRaw as ILeaderboardRaw[] | any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/away')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedAwayStandings);
    });
  });
});