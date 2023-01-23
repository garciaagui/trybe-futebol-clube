import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import User from '../database/models/User';
import { Response } from 'superagent';
import * as jsonwebtoken from 'jsonwebtoken';
import { mockedUser, mockedUnencryptedPassword, mockedToken } from './mocks/user.mocks'

const { app } = new App();
const { expect } = chai;
chai.use(chaiHttp);

describe('Testes de integração referentes a POST /login', async () => {

  afterEach(sinon.restore)

  let chaiHttpResponse: Response;

  describe('Em caso de sucesso', async () => {
    it('Retorna um token com status HTTP 200 quando o login é bem-sucedido', async () => {
      sinon.stub(User, "findOne").resolves(mockedUser as unknown as User);
      sinon.stub(jsonwebtoken, 'sign').resolves(mockedToken);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: mockedUser.email,
          password: mockedUnencryptedPassword,
        });

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal({ token: mockedToken });
    });
  });

  describe('Em caso de falha', async () => {
    it('Retorna um erro com status HTTP 400 quando o email não é passado', async () => {
      sinon.stub(User, "findOne").resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          password: mockedUnencryptedPassword,
        });

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });

    it('Retorna um erro com status HTTP 400 quando a senha não é passada', async () => {
      sinon.stub(User, "findOne").resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: mockedUser.email,
        });

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });

    it('Retorna um erro com status HTTP 401 o email é inválido', async () => {
      sinon.stub(User, "findOne").resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'wrongEmail',
          password: mockedUnencryptedPassword,
        });

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    });

    it('Retorna um erro com status HTTP 401 quando a senha é inválida', async () => {
      sinon.stub(User, "findOne").resolves(null);

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: mockedUser.email,
          password: 'wrongPassword',
        });

      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    });
  })
});
