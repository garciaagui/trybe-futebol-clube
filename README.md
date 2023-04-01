<a name="readme-top"></a>

<h1 align="center">Project Trybe Futebol Clube (TFC) ⚽</h1>

> [🇧🇷 Clique aqui para acessar a versão em português.](README_pt-br.md)

## Summary

<ol>
  <li><a href="#description">Description</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#how-to-run">How to Run</a></li>
  <li><a href="#endpoints">Endpoints</a></li>
  <li><a href="#about-trybe">About Trybe</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

## Description

**25th project** of the [Trybe][trybe-site-url] Web Development course.

TFC is a full-stack application that provides information about games and soccer rankings.

I was responsible for developing the dockerized back-end using data modeling through Sequelize so that the front-end could properly consume the API data. The architecture follows the MSC model and the principles and concepts of OOP and SOLID were applied.

> ℹ️ Front-end was developed and provided by Trybe.

<details>
  <summary><strong> 🧱 If you want to go deeper into the structure of the project, just click here.</strong></summary><br />

The project consists of 4 entities:

1️⃣ **Database:**

- It is a pre-configured MySQL docker container in the `docker-compose` file through a service defined as `db`.
- It is responsible for providing data to the back-end service.
- You can also connect to a MySQL client (Workbench, Beekeeper, DBeaver, etc.), using the credentials configured in the `docker-compose` file for the `db` service.

2️⃣ **Back-end:**

- Runs on port `3001` of `localhost`, which is the default port for the front-end to make requests;
- The application is initialized from the `app/backend/src/server.ts` file;
- `express` is executed and the application listens on the port from the environment variables;
- All extra dependencies (such as `joi`, `boom`, `express-async-errors`, etc.) must be listed in `app/backend/packages.npm`.

3️⃣ **Front-end:**

- Runs on port `3000` of `localhost`;
- The front-end communicates with the back-end service through the URL `http://localhost:3001`.

4️⃣ **Docker:**

- The `docker-compose` file is responsible for joining all containerized services (backend, frontend, and db) and running the entire project with the command `npm run compose:up` or `npm run compose:up:dev`.

</details>

<details>
  <summary><strong> 🎞️ Click to see a demo of the project.</strong></summary><br />
  
  https://user-images.githubusercontent.com/70448374/216853287-5550cb20-0d01-42da-85c4-c1fc1551faa7.mp4

</details>

<br/>

## Technologies

To ensure code quality, [ESlint][eslint-url] was used. To virtualize the application in containers, [Docker][docker-url] was chosen.

Below you can see a list of all the technologies used in the project.

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
  <summary><strong>🧪 Testing</strong></summary><br />

- [Chai][chai-url]
- [Mocha][mocha-url]
- [Sinon.js][sinon-url]

---

</details>

<br/>

## Features

<ul>
  <li>There are three ways to view the ranking: overall (which includes all matches), home games, and away games.</li>
  <li>It's possible to view the results of finished games and those that are still in progress.</li>
  <li>With the logged-in <strong>admin</strong> user, it's possible to edit the scores of matches in progress and finish them. Matches that have already ended cannot be changed.</li>
  <li>With the logged-in <strong>admin</strong> user, it's possible to add a new match.</li>
</ul>

<br/>

## How to Run

To run the project locally, follow the steps below.

1. Verify that your machine meets the minimum requirements for running the project;

- Unix Distribution Operating System;
- Node version equal to or greater than `16.14.0 LTS`;
- Docker;
- Docker-compose version equal to or greater than `1.29.2`.

2. Clone the repository;

```
git clone git@github.com:garciaagui/trybe-futebol-clube.git
```

3. Navigate to the root of the project;

```
cd trybe-futebol-clube/
```

4. At the root of the project, install the dependencies with the command below;

```
npm run postinstall
```

5. At the root of the project, go to the app directory and run the command below to start the containers. By doing so, three containers will be initialized:

- **app_backend**: related to the back-end;
- **app_frontend**: related to the front-end;
- **db**: related to the database.

```
cd app/ && npm run compose:up:dev
```

6. In your browser, visit `http://localhost:3000`. If everything went well, you should be able to use the application.

<details>
  <summary><strong> ℹ️ For additional instructions, click here.</strong></summary><br />

- To run the back-end tests, go to the `app/backend/` directory and use the command below.

```
npm run test:coverage
```

- To start the application outside the container and connect to your local database, follow the steps below.

1. Go to the `app/backend/` directory;
2. Rename the `.env.example` file to `.env`;
3. Configure the values according to the scenario of your environment (database credentials, desired secrets, etc.).

</details>

<br/>

## Endpoints

Below you can find a breakdown of the endpoints used in the project. To make HTTP requests and check the behavior of each endpoint, you can use the [Thunder Client](https://www.thunderclient.com/) extension.

> ⚠️ Please pay attention to the token generated during login, it will be necessary for other operations. Also remember that its **expiration time is 1 hour**.

<details>
  <summary><strong>Login</strong></summary>

### POST /login

- Validates the user's login and returns a token generated with jsonwebtoken (JWT).
- The generated token must be inserted in the `Authorization` Header to authenticate other operations. Remember to save it and keep in mind that its **expiration time is 1 hour**.
- URL: `http://localhost:3001/login`
- The request body must have the following format:

```
{
  "email": "string",
  "password": "string"
}
```

### GET /login/validate

- Validates the user's login and returns the user's `role` (admin or user).
- 🔑 The token is validated on this endpoint.
- URL: `http://localhost:3001/login/validate`

---

</details>

<details>
  <summary><strong>Teams</strong></summary>
  
### GET /teams
- Returns all teams registered in the database.
- URL: `http://localhost:3001/teams`

### GET /teams/:id

- Returns the team according to the id passed in the endpoint.
- Example URL: `http://localhost:3001/teams/1`

---

</details>
  
<details>
  <summary><strong>Matches</strong></summary>
  
### GET /matches
- Returns all matches registered in the database.
- URL: `http://localhost:3001/matches`

### POST /matches

- Registers a new match.
- 🔑 The token is validated in this endpoint.
- URL: `http://localhost:3001/matches`
- The request body must have the following format:

```
{
  "homeTeamId": number, // The value must be the id of the home team
  "awayTeamId": number, // The value must be the id of the away team
  "homeTeamGoals": number,
  "awayTeamGoals": number,
}
```

### PATCH /matches/:id

- Updates the score of the match whose id was passed in the endpoint.
- Example URL: `http://localhost:3001/matches/42`
- The request body must have the following format:

```
{
  "homeTeamGoals": number,
  "awayTeamGoals": number
}
```

### PATCH /matches/:id/finish

- Finishes the match whose id was passed in the endpoint.
- Example URL: `http://localhost:3001/matches/42/finish`
- No request body is needed.

---

</details>

<details>
  <summary><strong>Leaderboard</strong></summary>
  
### GET /leaderboard
- Returns the overall classification of the championship (considers all matches).
- URL: `http://localhost:3001/leaderboard`

### GET /leaderboard/home

- Returns the classification based only on matches played at home.
- URL: `http://localhost:3001/leaderboard/home`

### GET /leaderboard/away

- Returns the classification based only on matches played away.
- URL: `http://localhost:3001/leaderboard/away`

---

</details>

<br/>

## About Trybe

_"[Trybe][trybe-site-url] is a future school for anyone who wants to improve their lives and build a successful career in technology, where the person only pays when they get a good job."_

_"The program features over 1,500 hours of online classes covering introduction to software development, front-end, back-end, computer science, software engineering, agile methodologies, and behavioral skills."_

<br/>

## Contact

Project developed by **Guilherme Garcia**. Below are my social networks and means of contact. 🤘

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
