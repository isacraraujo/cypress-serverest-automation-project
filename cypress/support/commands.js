// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Comando personalizado para fazer login diretamente no sistema
Cypress.Commands.add('login_frontend', (url, user, password) => {
  cy.visit(`${url}/login`)
  cy.contains('h1','Login').should('be.visible')
  cy.get('[data-testid="email"]').type(user)
  cy.get('[data-testid="senha"]').type(password)
  cy.get('[data-testid="entrar"]').click()
  cy.contains('h1','Serverest Store').should('be.visible')
});
