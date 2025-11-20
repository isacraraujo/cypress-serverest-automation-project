import { faker } from '@faker-js/faker'

describe('Suíte de Teste: Cadastro de Produtos', () => {
  const url_application = Cypress.env('url_application')
  const userlogin       = Cypress.env('user_admin')
  const passwordlogin   = Cypress.env('password_admin')

  before(() => {
    // Ajustar a resolução para o 1368x768 conforme o cypress.config.js
    cy.viewport(Cypress.config('desktopViewWidth'), Cypress.config('desktopViewHeight'))
  });

  beforeEach(() => {
    // cria uma sessão para evitar login repetitivo nos próximos casos de testes desta suíte
    cy.session([userlogin, passwordlogin], () => {
      // utiliza o comando personalizado disponível em support/commands.js para fazer autenticar a cada execução
        cy.visit(`${url_application}/login`)
        cy.contains('h1','Login').should('be.visible')
        cy.get('[data-testid="email"]').type(userlogin)
        cy.get('[data-testid="senha"]').type(passwordlogin)
        cy.get('[data-testid="entrar"]').click()
        cy.contains('h1','Bem Vindo').should('be.visible')
    });
  });
  
  it('Deve Cadastrar Múltiplos Produtos a partir de uma Base de Dados', () => {
    // gera uma base de dados de 3 produtos aleatórios em um array utilizando o @fake-js
    // onde a cada iteração de produto e cadastrá-o
    Array.from({ length: 3 }).forEach(() => {
      const produto = {
        nome: faker.commerce.productName(),
        preco: faker.number.int({ min: 100, max: 1000 }),
        descricao: faker.commerce.productDescription(),
        quantidade: faker.number.int({ min: 5, max: 50 })
      }
      // iterações de cadastro no sistema
      cy.visit(`${url_application}/admin/cadastrarprodutos`)
      cy.get('[data-testid=nome]').type(produto.nome)
      cy.get('[data-testid=preco]').type(produto.preco)
      cy.get('[data-testid=descricao]').type(produto.descricao)
      cy.get('[data-testid="quantity"]').type(produto.quantidade)
      cy.get('[data-testid="cadastarProdutos"]').click()
      cy.contains('h1','Lista dos Produtos').should('be.visible')
    })
  });

});