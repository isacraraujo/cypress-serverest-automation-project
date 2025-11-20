Feature: Suíte de Teste: Cadastrar Usuários

  Background:
    Given que o usuário está autenticado na aplicação

  Scenario: Deve Cadastrar Novo Usuário Comum com Sucesso
    Given que o usuário acessa a página de cadastro de usuários
    And a página exibe o título "Cadastro de usuários"
    When ele preenche os campos <nome>, <email> e <senha> com dados válidos
    And clica no botão 'Cadastrar Usuário'
    Then a aplicação deve redirecionar para a página com o título "Lista dos usuários"
