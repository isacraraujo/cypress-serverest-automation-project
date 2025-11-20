Feature: Suíte de Teste: Efetuar Login

  Scenario: Deve Fazer Login com Sucesso
    Given que o usuário acessa a página de login da aplicação
    And a página exibe o título 'Login'
    When o usuário preenche o campo de <e-mail> com um login válido
    And preenche o campo de <senha> com a senha correspondente
    And clica no botão 'Entrar'
    Then a página deve exibir o título "Bem Vindo"
