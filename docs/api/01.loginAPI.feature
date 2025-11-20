Feature: Suíte de Teste de API: Login

  Scenario: Deve Retornar Token de Acesso ao Efetuar Login
    Given que o usuário administrador possui credenciais válidas
    When ele envia uma requisição 'POST' para o endpoint '/login' com seu <e-mail> e <senha>
    Then a resposta deve conter o status '200'
    And a mensagem "Login realizado com sucesso"
    And um token de autorização 'Bearer' deve ser retornado
