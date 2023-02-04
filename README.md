<h1 align="center">🚧 README em construção 🚧</h1><br />

<a name="readme-top"></a>

<h1 align="center">Projeto Trybe Futebol Clube (TFC) ⚽</h1>

<details>
  <summary>Sumário</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o Projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#como-executar-o-projeto">Como Executar o Projeto</a></li>
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
  <summary><strong> Caso queira se aprofundar na estrutura do projeto, é só clicar aqui.</strong></summary><br />

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

<!-- [![Projeto TFC][project-demo]][project-url] -->

<br/>

## Tecnologias

### *Gerais*
[![Docker][docker-badge]][docker-url]
[![ESlint][eslint-badge]][eslint-url]


### *Front-end*
[![CSS3][css3-badge]][css3-url]
[![HTML5][html5-badge]][html5-url]
[![JavaScript][javascript-badge]][javascript-url]
[![Jest][jest-badge]][jest-url]
[![React][react-badge]][react-url]
[![React Router][react-router-badge]][react-router-url]

### *Back-end*
[![Chai][chai-badge]][chai-url]
[![Express][express-badge]][express-url]
[![JWT][jwt-badge]][jwt-url]
[![Mocha][mocha-badge]][mocha-url]
[![MySQL][mysql-badge]][mysql-url]
[![Node.js][node-badge]][node-url]
[![Sequelize][sequelize-badge]][sequelize-url]
[![Sinon][sinon-badge]][sinon-url]
[![Typescript][typescript-badge]][typescript-url]

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
<!-- Caso deseje somente testar a aplicação, [clique aqui][project-url]. -->

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

4. Na raiz do projeto, vá até a diretório de `backend` e instale as dependências. Faça o mesmo processo para `frontend`;
  - Backend:
  ```
  cd app/backend/ && npm install
  ```
  - Frontend:
  ```
  cd app/frontend/ && npm install
  ```

5. Na raiz do projeto, vá até a diretório `app` e execute o comando abaixo para subir os containers. Ao fazê-lo, três containers serão inicializados:
- **app_backend**: referente ao back-end; 
- **app_frontend**: referente ao front-end;
- **db**: referente ao banco de dados.
```
cd app/ && npm run compose:up:dev
```

6. No navegador, visite http://localhost:3000. Se tudo ocorreu bem, será possível utilizar a aplicação.

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

## Habilidades
<ul>
  <li>Modelagem de dados com Sequelize e Typescript.</li>
  <li>Aplicação do conceito de arquitetura de software MSC (Model, Service e Controller).</li>
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
Projeto desenvolvido por Guilherme Garcia. Seguem abaixo minhas redes sociais e meios de contato.

[![Gmail][gmail-badge]][gmail-url]
[![Linkedin][linkedin-badge]][linkedin-url]
[![GitHub][github-badge]][github-url]
[![Instagram][instagram-badge]][instagram-url]

<p align="right"><a href="#readme-top">Voltar ao topo</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
[trybe-site-url]: https://www.betrybe.com/
<!-- [project-demo]: -->
<!-- [project-url]: -->

[chai-url]: https://www.chaijs.com/
[chai-badge]: https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white
[css3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[css3-badge]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[docker-url]: https://www.docker.com/
[docker-badge]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
[eslint-url]: https://eslint.org/
[eslint-badge]: https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white
[express-url]: https://expressjs.com/
[express-badge]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[html5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[html5-badge]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[javascript-badge]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[jest-url]: https://jestjs.io/
[jest-badge]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[jwt-url]: https://jwt.io/
[jwt-badge]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[mocha-url]: https://mochajs.org/
[mocha-badge]: https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white
[mysql-url]: https://www.mysql.com/
[mysql-badge]: https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
[node-url]: https://nodejs.org/en/
[node-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[react-url]: https://reactjs.org/
[react-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-router-url]: https://reactrouter.com/en/main
[react-router-badge]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[sequelize-url]: https://sequelize.org/
[sequelize-badge]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white
[sinon-url]: https://sinonjs.org/
[sinon-badge]: https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon
[typescript-url]: https://www.typescriptlang.org/
[typescript-badge]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white


[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:garciaguig@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/garciaagui/
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/garciaagui
[instagram-badge]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/garciaagui/