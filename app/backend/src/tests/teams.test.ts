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