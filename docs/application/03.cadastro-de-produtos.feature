Feature: Suíte de Teste: Cadastro de Produtos

  Background:
    Given que o usuário está autenticado na aplicação

  Scenario: Deve Cadastrar Múltiplos Produtos a partir de uma Base de Dados
    Given que o usuário acessa a página de cadastro de produtos
    When ele preenche os dados de <3> produtos gerados aleatoriamente com:
      | nome | preço | descrição | quantidade |
    And envia o formulário de cadastro para cada produto
    Then a aplicação deve redirecionar para a página com o título "Lista dos Produtos" após cada cadastro
