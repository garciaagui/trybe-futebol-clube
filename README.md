<a name="readme-top"></a>

<h1 align="center">Projeto Trybe Futebol Clube (TFC) ⚽</h1>

<details>
  <summary>Sumário</summary><br />
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o Projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#como-executar-o-projeto">Como Executar o Projeto</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#habilidades">Habilidades</a></li>
    <li><a href="#sobre-a-trybe">Sobre a Trybe</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

## Sobre o Projeto

Projeto **25** do curso de Desenvolvimento Web da [Trybe][trybe-site-url].

O TFC é uma aplicação fullstack que oferece informações sobre jogos e classificações de futebol.

Fui responsável pelo desenvolvimento do back-end dockerizado utilizando modelagem de dados através do Sequelize, de forma que o front-end pudesse consumir os dados da API adequadamente. A arquitetura segue o modelo MSC e foram aplicados os princípios e conceitos de POO e SOLID.

> ℹ️ Todo front-end foi desenvolvido e disponibilizado pela Trybe.

<details>
  <summary><strong> 🧱 Caso queira se aprofundar na estrutura do projeto, é só clicar aqui.</strong></summary><br />

O projeto é composto de 4 entidades:

1️⃣ **Banco de dados:**

- É um container docker MySQL já configurado no `docker-compose` através de um serviço definido como `db`.
- Tem o papel de fornecer dados para o serviço de back-end.
- Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`;
- Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no `docker-compose` no serviço `db`.

2️⃣ **Back-end:**

- Roda na porta `3001` do `localhost`, porta pela qual o front-end faz requisições por padrão;
- A aplicação é inicializada a partir do arquivo `app/backend/src/server.ts`;
- O `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;
- Todas as dependências extras (tal como `joi`, `boom`, `express-async-errors`...) devem ser listadas em `app/backend/packages.npm`.

3️⃣ **Front-end:**

- Roda na porta `3000` do `localhost`;
- O front se comunica com serviço de back-end pela url `http://localhost:3001`.

4️⃣ **Docker:**

- O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;
</details>

<details>
  <summary><strong> 🎞️ Aqui você pode conferir uma demonstração do projeto.</strong></summary><br />
  
  https://user-images.githubusercontent.com/70448374/216853287-5550cb20-0d01-42da-85c4-c1fc1551faa7.mp4

</details>

<br/>

## Tecnologias

Para garantir a qualidade do código, fora utilizado o [ESlint][eslint-url]. Para virtualizar a aplicação em containers, o [Docker][docker-url] foi o escolhido.

Abaixo você pode conferir integralmente as tecnologias empregadas no projeto.

<details>
  <summary><strong>✨ Front-end</strong></summary><br />

- [HTML5][html5-url]
- [CSS3][css3-url]
- [JavaScript][javascript-url]
- [React.js][react-url]
- [React Router][react-router-url]
- [Axios][axios-url]
- [dotenv][dotenv-url]

---

</details>

<details>
  <summary><strong>⚙️ Back-end</strong></summary><br />

- [Node.js][node-url]
- [Typescript][typescript-url]
- [MySQL][mysql-url]
- [Express][express-url]
- [Sequelize][sequelize-url]
- [JWT][jwt-url]
- [Bcryptjs][bcryptjs-url]
- [dotenv][dotenv-url]

---

</details>

<details>
  <summary><strong>🧪 Testes</strong></summary><br />

- [Chai][chai-url]
- [Mocha][mocha-url]
- [Sinon.js][sinon-url]

---

</details>

<br/>

## Funcionalidades

<ul>
  <li>Há três maneiras de visualizar a classificação: geral (que engloba todas as partidas), jogos como mandante e jogos como visitante.</li>
  <li>Consultar todos os jogos do campeonato, sendo possível visualizar o resultado dos jogos finalizados e dos que ainda estão em andamento.</li>
  <li>Com o usuário <strong>admin</strong> logado, é possível editar os placares das partidas em andamento e finalizá-las. Jogos já finalizados não podem ser alterados.</li>
  <li>Com o usuário <strong>admin</strong> logado, é possível adicionar uma nova partida.</li>
</ul>

<br/>

## Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo.

1. Verifique se a sua máquina possui as configurações mínimas para execução do projeto;

- Sistema Operacional Distribuição Unix;
- Node versão igual ou superior à `16.14.0 LTS`;
- Docker;
- Docker-compose versão igual ou superior à `1.29.2`.

2. Clone o repositório;

```
git clone git@github.com:garciaagui/trybe-project-25-trybe-futebol-clube.git
```

3. Navegue até a raiz do projeto;

```
cd trybe-project-25-trybe-futebol-clube/
```

4. Na raiz do projeto, instale as dependências com o comando abaixo;

```
npm run postinstall
```

5. Na raiz do projeto, vá até a diretório `app` e execute o comando abaixo para subir os containers. Ao fazê-lo, três containers serão inicializados:

- **app_backend**: referente ao back-end;
- **app_frontend**: referente ao front-end;
- **db**: referente ao banco de dados.

```
cd app/ && npm run compose:up:dev
```

6. No navegador, visite `http://localhost:3000`. Se tudo ocorreu bem, será possível utilizar a aplicação.

<details>
  <summary><strong> ℹ️ Para instruções adicionais, clique aqui.</strong></summary><br />

- Para executar os testes do back-end, vá até o diretório `app/backend/` e utilize o comando abaixo.

```
npm run test:coverage
```

- Para inicializar a aplicação fora do container e conectar com seu banco local, siga os passos abaixo.

1. Vá até o diretório `app/backend/`;
2. Renomeie o arquivo `.env.example` para `.env`;
3. Configure os valores de acordo com o cenário do seu ambiente (credenciais de banco de dados, secrets desejadas e etc).
</details>

<br/>

## Endpoints

Abaixo você pode conferir um detalhamento dos endpoints utilizados no projeto. Para realizar as requisições HTTP e consultar o comportamento de cada endpoint, você pode utilizar a extensão [Thunder Client](https://www.thunderclient.com/).

> ⚠️ Atente-se ao token gerado durante o login, ele será necessário para outras operações. Lembre-se também que seu tempo de expiração é de 1h.

<details>
  <summary><strong>Login</strong></summary>

### POST /login

- Valida o login do usuário e retorna um token gerado com jsonwebtoken (jwt).
- O token gerado deve ser inserido no Header `Authorization` para autenticar outras operações. Lembre-se de guardá-lo e tenha em mente que seu tempo de expiração é de 1h.
- URL: `http://localhost:3001/login`
- O corpo da requisição deve conter o seguinte formato:

```
{
  "email": "string",
  "password": "string"
}
```

### GET /login/validate

- Valida o login do usuário e retorna o `role` (admin ou user) do usuário.
- 🔑 O token é validado neste endpoint.
- URL: `http://localhost:3001/login/validate`

---

</details>

<details>
  <summary><strong>Teams</strong></summary>
  
### GET /teams
- Retorna todos os times registrados no banco de dados.
- URL: `http://localhost:3001/teams`

### GET /teams/:id

- Retorna o time de acordo com o id passado no endpoint.
- Exemplo de URL: `http://localhost:3001/teams/1`

---

</details>
  
<details>
  <summary><strong>Matches</strong></summary>
  
### GET /matches
- Retorna todas as partidas registradas no banco de dados.
- URL: `http://localhost:3001/matches`

### POST /matches

- Registra uma nova partida.
- 🔑 O token é validado neste endpoint.
- URL: `http://localhost:3001/matches`
- O corpo da requisição deve conter o seguinte formato:

```
{
  "homeTeamId": number, // O valor deve ser o id do time
  "awayTeamId": number, // O valor deve ser o id do time
  "homeTeamGoals": number,
  "awayTeamGoals": number,
}
```

### PATCH /matches/:id

- Atualiza o placar da partida cujo id foi passado no endpoint.
- Exemplo de URL: `http://localhost:3001/matches/42`
- O corpo da requisição deve conter o seguinte formato:

```
{
  "homeTeamGoals": number,
  "awayTeamGoals": number
}
```

### PATCH /matches/:id/finish

- Finaliza a partida cujo id foi passado no endpoint.
- Exemplo de URL: `http://localhost:3001/matches/42/finish`
- Nada precisa ser inserido no corpo da requisição.

---

</details>

<details>
  <summary><strong>Leaderboard</strong></summary>
  
### GET /leaderboard
- Descrição: Retorna a classificação geral do campeonato (considera todas as partidas).
- URL: `http://localhost:3001/leaderboard`

### GET /leaderboard/home

- Descrição: Retorna a classificação baseada somente nos jogos disputados em casa.
- URL: `http://localhost:3001/leaderboard/home`

### GET /leaderboard/away

- Descrição: Retorna a classificação baseada somente nos jogos disputados como visitante.
- URL: `http://localhost:3001/leaderboard/away`

---

</details>

<br/>

## Habilidades

<ul>
  <li>Modelagem de dados com Sequelize e Typescript.</li>
  <li>Aplicação do conceito de arquitetura de software MSC (Model-Service-Controller).</li>
  <li>Configuração de Dockerfiles para back-end e front-end.</li>
  <li>Aplicação do Desenvolvimento Orientado a Testes (TDD).</li>
  <li>Criação de testes de integração.</li>
  <li>Aplicação dos princípios de Paradigma de Orientação a Objetos (POO).</li>
  <li>Aplicação dos princípios de SOLID.</li>
</ul>

<br/>

## Sobre a Trybe

_"A [Trybe][trybe-site-url] é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

_"O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais._"

<br/>

## Contato

Projeto desenvolvido por Guilherme Garcia. Seguem abaixo minhas redes sociais e meios de contato. 🤘

[![Gmail][gmail-badge]][gmail-url]
[![Linkedin][linkedin-badge]][linkedin-url]
[![GitHub][github-badge]][github-url]
[![Instagram][instagram-badge]][instagram-url]

<p align="right"><a href="#readme-top">Voltar ao topo</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

[trybe-site-url]: https://www.betrybe.com/
[axios-url]: https://axios-http.com/docs/intro
[bcryptjs-url]: https://www.npmjs.com/package/bcryptjs
[chai-url]: https://www.chaijs.com/
[cors-url]: https://www.npmjs.com/package/cors
[css3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[docker-url]: https://www.docker.com/
[dotenv-url]: https://www.dotenv.org/
[eslint-url]: https://eslint.org/
[express-url]: https://expressjs.com/
[html5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[jest-url]: https://jestjs.io/
[jwt-url]: https://jwt.io/
[mocha-url]: https://mochajs.org/
[mysql-url]: https://www.mysql.com/
[node-url]: https://nodejs.org/en/
[react-url]: https://reactjs.org/
[react-router-url]: https://reactrouter.com/en/main
[sequelize-url]: https://sequelize.org/
[sinon-url]: https://sinonjs.org/
[typescript-url]: https://www.typescriptlang.org/
[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:garciaguig@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/garciaagui/
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/garciaagui
[instagram-badge]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/garciaagui/
