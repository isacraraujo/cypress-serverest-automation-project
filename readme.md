# Projeto de Automação de Testes com Cypress
Cypress (E2E/API) + Jenkins + Docker + Mochawesome e mais...

## Requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (recomendado: v22+)
- [Docker Desktop](https://www.docker.com/) (opcional)
- [Jenkins](https://www.jenkins.io/) (opcional)
- [VSCode](https://code.visualstudio.com/) (opcional)

## Passos para configuração

Execute os seguintes comandos no terminal para configurar o ambiente de testes:

### 1. Baixar Repositório
```sh
git clone https://github.com/isacraraujo/cypress-serverest-automation-project.git
```
Este comando vai fazer o clone do projeto para sua máquina local.

### 2. Acessar o Repositório:
```sh
cd /cypress-automation-project
```
Este comando vai acessar a pasta do projeto clonado.

### 3. Instala Todas as Dependências do Projeto
```sh
npm install
```
Este comando instala todas as dependências descritas em package.json

### 4.Configure o .env
Acesse o site descrito em URL_APPLICATION, cadastre um usuário comum e um usuário administrador, crie um arquivo ".env" na raiz do projeto e configure seguindo exemplo abaixo:
```sh
URL_APPLICATION=https://front.serverest.dev
URL_API=https://serverest.dev
USER_AUTH=user@email.com
PASSWORD_AUTH=password
USER_ADMIN=admin@email.com
PASSWORD_ADMIN=password
```

## Executando o Cypress

### Somente Testes de API
```sh
npx cypress run --spec "cypress/e2e/api/**/*"
```

### Somente Testes Frontend (Application)
```sh
npx cypress run --spec "cypress/e2e/api/**/*"
```

### Para Executar Toda a Suíte utilizando o Chrome em Headless
```sh
npx cypress run --browser chrome
```

### Para abrir o Cypress
```sh
npx cypress open
```

### Para abrir o Relatório (Mochawesome) Após Execução
```sh
npm run report
```

## Execução do Projeto em uma Imagem utilizando o Docker
Inicie o Docket Desktop em sua máquina local, acesse o repositório via Terminal e execute o seguinte comando para gerar uma imagem do projeto de acordo com o arquivo Dockerfile:
```sh
docker build -t cypress-serverest-automation-project .
```