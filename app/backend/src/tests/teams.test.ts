import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import Team from '../database/models/Team';
import { Response } from 'superagent';
import { mockedTeams } from './mocks/teams.mocks'

const { app } = new App();
const { expect } = chai;
chai.use(chaiHttp);

describe('Testes de integração referentes a GET /teams', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna todos os times com status HTTP 200', async () => {
      sinon.stub(Team, "findAll").resolves(mockedTeams as unknown as Team[]);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedTeams);
    });
  });
});

describe('Testes de integração referentes a GET /teams/:id', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna o time cujo id foi passado nos parâmetros, com status HTTP 200', async () => {
      sinon.stub(Team, "findOne").resolves(mockedTeams[0] as unknown as Team);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/1')

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(mockedTeams[0]);
    });
  });

  describe('Em caso de falha', async () => {
    it('Retorna um erro com status HTTP 404 quando não há time com o id passado', async () => {
      sinon.stub(Team, "findOne").resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/9999')
        .send({ params: { id: 99999 } })

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Team not found' });
    });

    it('Retorna um erro com status HTTP 400 quando o id é inválido', async () => {
      sinon.stub(Team, "findOne").resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/invalidId')
      // console.log(chaiHttpResponse)
      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Id must be a number' });
    });
  });
});