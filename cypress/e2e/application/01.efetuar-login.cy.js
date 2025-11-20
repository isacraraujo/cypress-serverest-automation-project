describe('Suíte de Teste: Efetuar Login', () => {
  const url_application = Cypress.env('url_application')
  const userlogin       = Cypress.env('user_auth')
  const passwordlogin   = Cypress.env('password_auth')

  before(() => {
    // Ajustar a resolução para o 1368x768 conforme o cypress.config.js
    cy.viewport(Cypress.config('desktopViewWidth'), Cypress.config('desktopViewHeight'))
  });

  it('Deve Fazer Login com Sucesso', () => {
    cy.visit(`${url_application}/login`)
    cy.contains('h1','Login').should('be.visible')
    cy.get('[data-testid="email"]').type(userlogin)
    cy.get('[data-testid="senha"]').type(passwordlogin)
    cy.get('[data-testid="entrar"]').click()
    cy.contains('h1','Serverest Store').should('be.visible')
  });

});