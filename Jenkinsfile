pipeline {
  agent any

  tools {
    nodejs 'NodeJS_24'
  }

  stages {
    stage('Instalar Dependências') {
      steps {
        bat 'npm install -D'
      }
    }

    stage('Executar Suíte de Testes de API') {
      steps {
        catchError(message:'Erro em Caso de Teste de API') {
          bat 'npx cypress run --spec "cypress/e2e/api/**/*"'
        }
      }
    }

    stage('Executar Suíte de Testes de Frontend(Application)') {
      steps {
        catchError(message:'Erro em Caso de Teste de Frontend') {
          bat 'npx cypress run --spec "cypress/e2e/application/**/*"'
        }
      }
    }

    stage('Publicar Relatório de Execução') {
      when {
        expression { fileExists('cypress/reports/report.html') }
      }
      steps {
        catchError(message:'Erro ao Emitir Relatórios') {
          publishHTML (target : [allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'cypress/reports',
            reportFiles: 'report.html',
            reportName: 'Relatorio de Execução de Testes',
            reportTitles: 'Relatorio de Testes Automatizados em Cypress'
          ])
        }
      }
    }
  }
}
