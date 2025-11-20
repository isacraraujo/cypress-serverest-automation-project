import { faker } from '@faker-js/faker'

describe('Suíte de Teste: Cadastrar Usuários', () => {
  const url_application = Cypress.env('url_application')
  const userlogin       = Cypress.env('user_auth')
  const passwordlogin   = Cypress.env('password_auth')
  const passwordTest    = 'test123'

  before(() => {
    // Ajustar a resolução para o 1368x768 conforme o cypress.config.js
    cy.viewport(Cypress.config('desktopViewWidth'), Cypress.config('desktopViewHeight'))
  });

  beforeEach(() => {
    // utiliza o comando personalizado disponível em support/commands.js para fazer autenticar a cada execução
    cy.login_frontend(url_application, userlogin, passwordlogin)
  });
  
  it('Deve Cadastrar Novo Usuário Comum com Sucesso', () => {
    cy.visit(`${url_application}/admin/cadastrarusuarios`)
    cy.contains('h1','Cadastro de usuários').should('be.visible')
    cy.get('[data-testid=nome]').type(faker.person.fullName())
    cy.get('[data-testid=email]').type(faker.internet.email().toLowerCase())
    cy.get('[data-testid=password]').type(passwordTest)
    cy.get('[data-testid="cadastrarUsuario"]').click()
    cy.contains('h1','Lista dos usuários').should('be.visible')
  });

});