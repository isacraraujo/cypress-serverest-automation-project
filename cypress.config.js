const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  env: {
    url_application: process.env.URL_APPLICATION,
    url_api:         process.env.URL_API,
    user_auth:       process.env.USER_AUTH,
    password_auth:   process.env.PASSWORD_AUTH,
    user_admin:      process.env.USER_ADMIN,
    password_admin:  process.env.PASSWORD_ADMIN
  },
  e2e: {
    setupNodeEvents(on, config) {
      // exportar o módulo de relatórios do Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
      // configurações de responsividade mínima para desktop
      config.desktopViewWidth  = 1368;
      config.desktopViewHeight = 768;
      return config;
    }
  },
  // configurações personalizadas do relatório Mochawesome
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:           'cypress/reports/',
    reportFilename:      'report',
    reportTitle:         'Testes Automatizados com Cypress',
    reportPageTitle:     'Testes Automatizados com Cypress',
    charts:              true,
    embeddedScreenshots: true,
    inlineAssets:        true,
    saveAllAttempts:     false,
  }
});
