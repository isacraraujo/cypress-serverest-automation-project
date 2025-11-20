Feature: Suíte de Teste de API: Usuários

  Scenario: Deve Listar Todos Usuários Cadastrados
    Given que existem usuários cadastrados na base de dados
    When uma requisição 'GET' for enviada ao endpoint '/usuarios'
    Then a resposta deve conter o status '200'
    And deve conter um campo 'quantidade' do tipo numérico
    And deve retornar um array de usuários
    And o array deve conter pelo menos um usuário
    And cada usuário deve conter as <propriedades>:
      | nome         | string |
      | email        | string |
      | password     | string |
      | administrador| string |
      | _id          | string |
