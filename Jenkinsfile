pipeline {
  agent any

  options {
    ansiColor('xterm')
  }

  tools {
    nodejs 'NodeJS_24'
  }

  stages {

    stage('Instalar Dependências') {
      steps {
        script {
          if (isUnix()) { 
            sh 'npm install -D' 
          } else { 
            bat 'npm install -D' 
          }
        }
      }
    }

    stage('Executar Suítes de Testes em Paralelo') {
      parallel {
        
        stage('Testes de API') {
          steps {
            catchError(message: 'Erro em Caso de Teste de API') {
              script {
                if (isUnix()) { 
                  sh 'npx cypress run --spec "cypress/e2e/api/**/*"' 
                } else { 
                  bat 'npx cypress run --spec "cypress/e2e/api/**/*"' 
                }
              }
            }
          }
        }

        stage('Testes de Frontend') {
          steps {
            catchError(message: 'Erro em Caso de Teste de Frontend') {
              script {
                if (isUnix()) { 
                  sh 'npx cypress run --spec "cypress/e2e/application/**/*"'
                } else { 
                  bat 'npx cypress run --spec "cypress/e2e/application/**/*"'
                }
              }
            }
          }
        }

      }
    }

    stage('Publicar Relatório de Execução') {
      when {
        expression { fileExists('cypress/reports/report.html') }
      }
      steps {
        catchError(message:'Erro ao Emitir Relatórios') {
          publishHTML(target: [
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'cypress/reports',
            reportFiles: 'report.html',
            reportName: 'Relatório de Execução de Testes',
            reportTitles: 'Relatório de Testes Automatizados com Cypress'
          ])
        }
      }
    }
  }
}