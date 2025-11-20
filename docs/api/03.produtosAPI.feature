Feature: Suíte de Teste de API: Produtos

  Scenario: Deve Cadastrar Produto com Usuário Autenticado
    Given que o usuário está autenticado com um 'token' válido
    And possui os dados de um novo produto com <nome>, <preco>, <descricao> e <quantidade>
    When ele envia uma requisição 'POST' para o endpoint '/produtos' com os dados do produto e o 'token'
    Then a resposta deve conter o status '201'
    And deve conter a mensagem "Cadastro realizado com sucesso"
