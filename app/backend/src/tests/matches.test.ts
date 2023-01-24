import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import Match from '../database/models/Match';
import { Response } from 'superagent';
import { mockedMatches, mockedMatchesInProgress, mockedFinishedMatches } from './mocks/matches.mocks'

const { app } = new App();
const { expect } = chai;
chai.use(chaiHttp);

describe('Testes de integração referentes a GET /matches', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna todas as partidas com status HTTP 200', async () => {
      sinon.stub(Match, "findAll").resolves(mockedMatches as unknown as Match[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/matches')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedMatches);
    });
  });
});

describe('Testes de integração referentes a GET /matches com filtro de "inProgress"', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna todas as partidas em andamento, com status HTTP 200', async () => {
      sinon.stub(Match, "findAll").resolves(mockedMatchesInProgress as unknown as Match[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/matches?inProgress=true')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedMatchesInProgress);
    });

    it('Retorna todas as partidas finalizadas, com status HTTP 200', async () => {
      sinon.stub(Match, "findAll").resolves(mockedFinishedMatches as unknown as Match[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/matches?inProgress=false')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedFinishedMatches);
    });
  });

  describe('Em caso de falha', async () => {
    it('Retorna um erro com status HTTP 400 quando o valor da query string não for "true" ou "false"', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/matches?inProgress=invalidValue')

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Value must be "true" or "false"' });
    });
  });
});