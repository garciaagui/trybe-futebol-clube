import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import model from '../database/models'
import { Response } from 'superagent';
import { mockedHomeStandings, mockedAwayStandings, mockedGeneralStandings } from './mocks/leaderboard.mocks'
import { QueryTypes } from 'sequelize';
import { ILeaderboard } from '../interfaces';
import { generalStandingsQuery, standingsByReferenceQueries } from '../utils/queries';

const { app } = new App();
const { expect } = chai;
chai.use(chaiHttp);

describe('Testes de integração referentes a GET /leaderboard', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna com status HTTP 200 a classificação considerando todos as partidas', async () => {
      // const findAllStub = sinon.stub(Team, "findAll")
      // findAllStub.onCall(0).resolves(mockedHomeStandingsRaw as ILeaderboardRaw[] | any);
      // findAllStub.onCall(1).resolves(mockedAwayStandingsRaw as ILeaderboardRaw[] | any);
      sinon.stub(model, 'query')
        .withArgs(generalStandingsQuery, { type: QueryTypes.SELECT }).
        resolves(mockedGeneralStandings as ILeaderboard[] | any)

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
      sinon.stub(model, 'query')
        .withArgs(standingsByReferenceQueries.home, { type: QueryTypes.SELECT }).
        resolves(mockedHomeStandings as ILeaderboard[] | any)

      // sinon.stub(Team, "findAll").resolves(mockedHomeStandingsRaw as ILeaderboardRaw[] | any);

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
      sinon.stub(model, 'query')
        .withArgs(standingsByReferenceQueries.away, { type: QueryTypes.SELECT }).
        resolves(mockedAwayStandings as ILeaderboard[] | any)

      // sinon.stub(Team, "findAll").resolves(mockedAwayStandingsRaw as ILeaderboardRaw[] | any);

      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/away')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedAwayStandings);
    });
  });
});