import { faker } from '@faker-js/faker'

describe('Suíte de Teste de API: Produtos', () => {
  const url_api      = Cypress.env('url_api')
  const endpoint     = '/produtos'
  const messageExito = 'Cadastro realizado com sucesso'
  const bodyProduto  = {
    nome: faker.commerce.productName(),
    preco: 100,
    descricao: faker.commerce.productDescription(),
    quantidade: 50
  }

  it('Deve Cadastrar Produto com Usuário Autenticado', () => {
    // lê o arquivo de autorização gerado no caso de teste de login da suíte 01
    cy.readFile('cypress/temp/token.json').then(({ token }) => {
      cy.api({
        url: `${url_api}${endpoint}`,
        method: 'POST',
        headers: { Authorization: token },
        body: bodyProduto,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('message', messageExito)
      })
    })
  });

});
