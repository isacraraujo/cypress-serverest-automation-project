describe('Suíte de Teste de API: Login', () => {
  const user_admin     = Cypress.env('user_admin')
  const password_admin = Cypress.env('password_admin')
  const url_api        = Cypress.env('url_api')
  const endpoint       = '/login'
  const mensagemExito  = 'Login realizado com sucesso'

  it('Deve Retornar Token de Acesso ao Efetuar Login', () => {
    cy.api({
      url: `${url_api}${endpoint}`,
      method: 'POST',
      body: { email:user_admin, password:password_admin },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('message', mensagemExito)
      expect(response.body).to.have.property('authorization')
      // Grava o token em um arquivo temporário 
      // para ser utilizado para autenticações nos próximos casos de teste
      const token = response.body.authorization
      cy.writeFile('cypress/temp/token.json', { token })
    })
  });

});