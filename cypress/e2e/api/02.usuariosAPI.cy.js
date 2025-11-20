describe('Suíte de Teste de API: Usuários', () => {
  const url_api   = Cypress.env('url_api')
  const endpoint  = '/usuarios'

  it('Deve Listar Todos Usuários Cadastrados', () => {
    cy.api({
      url: `${url_api}${endpoint}`,
      method: 'GET',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('quantidade').to.be.a('number')
      // verifica que a responsta tem um corpo de usuários em um array
      // e se há pelo menos 1 usuário neste array
      expect(response.body.usuarios).to.be.an('array')
      expect(response.body.usuarios.length).to.be.greaterThan(0)
      // verifica as propriedades deste primeiro 'usuario'
      const usuario = response.body.usuarios[0]
      expect(usuario).to.have.property('nome').and.be.a('string')
      expect(usuario).to.have.property('email').and.be.a('string')
      expect(usuario).to.have.property('password').and.be.a('string')
      expect(usuario).to.have.property('administrador').and.be.a('string')
      expect(usuario).to.have.property('_id').and.be.a('string')
    });
  });

});