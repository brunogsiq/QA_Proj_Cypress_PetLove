const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
    viewportWidth: 1300,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: 'cypress/report',
        overwrite: true,
        html: true,
        json: false,
        timestamp: 'dd-mm-yyyy_HH-MM-ss'
    },
    env: {
        baseUrl: "https://petlov.vercel.app/",
    },
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        //Aqui ficarão todos os meus testes:
        specPattern: [
          "cypress/e2e/web/00 - All Tests/AllTests.cy.js",
          "cypress/e2e/web/01 - Tela Home/Tela Home - Testes.cy.js",
          "cypress/e2e/web/01 - Tela Home/Validar critérios de aceite/Validações da Tela Home.cy.js",
          "cypress/e2e/web/01 - Tela Home/Validar regras de negócio/Validações da Tela Home.cy.js",
          "cypress/e2e/web/02 - Tela Cadastro/Tela Cadastro.cy.js - Testes.cy.js",
          "cypress/e2e/web/02 - Tela Cadastro/Validar critérios de aceite/Validações da Tela Cadastro.cy.js",
          "cypress/e2e/web/02 - Tela Cadastro/Validar regras de negócio/Validações da Tela Cadastro.cy.js",
        ],
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
});