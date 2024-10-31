/// <reference types="cypress" /> 

import { telaHome } from "../../pageObjects/01_telaHome/telaHome";
import { telaCadastro } from "../../pageObjects/02_telaCadastro/telaCadastro";

//Inicializa os Page Objects

const TelaHome = new telaHome();
const TelaCadastro = new telaCadastro();

Cypress.Commands.add("validarCriteriosDeAceiteTelaHome", () => 
{
    cy.visit(Cypress.env("baseUrl"));

    TelaHome.logotipo
        .should("be.visible")
    TelaHome.slogan
        .should("be.visible")
    TelaHome.mensagem
        .should("be.visible")
    TelaHome.iconeBotaoCadastrePontoDeDoacao
        .should("be.visible")
    TelaHome.textoBotaoCadastrePontoDeDoacao
        .should("be.visible")
    TelaHome.botaoCadastrePontoDeDoacao
        .should("be.visible")
});

Cypress.Commands.add("validarRegrasDeNegocioTelaHome", () => 
{
    cy.visit(Cypress.env("baseUrl"));

    TelaHome.logotipo
        .should("be.visible")
        TelaHome.botaoCadastrePontoDeDoacao
            .click()
            TelaCadastro.tituloFormularioDeCadastro
                .should("be.visible")
                .and("contain", "Cadastro de ponto de doação");
});