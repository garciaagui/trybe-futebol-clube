import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import Match from '../database/models/Match';
import { Response } from 'superagent';
import * as jsonwebtoken from 'jsonwebtoken';
import { mockedToken, mockedPayload } from './mocks/user.mocks';
import {
  mockedMatches,
  mockedMatchesInProgress,
  mockedFinishedMatches,
  mockedCorrectNewMatchReq,
  mockedNewMatchWithSameTeamsReq,
  mockedNewMatchWithInvalidTeamsReq,
  mockedNewMatchRes
} from './mocks/matches.mocks'

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

describe('Testes de integração referentes a GET /matches/:id/finish"', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna a mensagem "Finished", com status HTTP 200', async () => {
      sinon.stub(Match, "update").resolves([1]);

      chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/42/finish')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Finished' });
    });
  });

  describe('Em caso de falha', async () => {
    it('Retorna um erro com status HTTP 404 quando não há partida com o id passado', async () => {

      chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/9999/finish')

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Match not found' });
    });

    it('Retorna um erro com status HTTP 400 quando o id é inválido', async () => {

      chaiHttpResponse = await chai
        .request(app)
        .patch('/matches/invalidId/finish')

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Id must be a number' });
    });
  });
});

describe('Testes de integração referentes a POST /matches', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna a partida criada com status HTTP 201 quando os dados e o token são válidos', async () => {
      sinon.stub(Match, "create").resolves(mockedNewMatchRes as unknown as Match);
      sinon.stub(jsonwebtoken, 'verify').resolves(mockedPayload);

      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set({ "Authorization": mockedToken })
        .send(mockedCorrectNewMatchReq)

      expect(chaiHttpResponse.status).to.be.equal(201);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedNewMatchRes);
    });
  });

  describe('Em caso de falha', async () => {
    it('Retorna um erro com status HTTP 422 ao criar uma partida com times iguais', async () => {
      sinon.stub(jsonwebtoken, 'verify').resolves(mockedPayload);

      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set({ "Authorization": mockedToken })
        .send(mockedNewMatchWithSameTeamsReq)

      expect(chaiHttpResponse.status).to.be.equal(422);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: "It is not possible to create a match with two equal teams" });
    });

    it('Retorna um erro com status HTTP 404 ao criar uma partida com pelo menos um time inexistente', async () => {
      sinon.stub(jsonwebtoken, 'verify').resolves(mockedPayload);

      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set({ "Authorization": mockedToken })
        .send(mockedNewMatchWithInvalidTeamsReq)

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: "There is no team with such id!" });
    });
  });
});