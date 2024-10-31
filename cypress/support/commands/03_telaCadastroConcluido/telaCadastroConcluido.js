/// <reference types="cypress" /> 

import { telaHome } from "../../pageObjects/01_telaHome/telaHome";
import { telaCadastroComSucesso } from "../../pageObjects/03_telaCadastroConcluido/telaCadastroConcluido";

//Inicializa os Page Objects
const TelaHome = new telaHome();
const TelaCadastroComSucesso = new telaCadastroComSucesso();

Cypress.Commands.add("validarCriteriosDeAceiteTelaCadastroConcluido", () => 
{
    cy.validarRegrasDeNegocioTelaCadastro();

    TelaCadastroComSucesso.logotipo
        .should("be.visible");

    TelaCadastroComSucesso.tituloMensagem
        .should("be.visible");

    TelaCadastroComSucesso.textoMensagem
        .should("be.visible");

    TelaCadastroComSucesso.iconeBotaoVoltar
        .should("be.visible");

    TelaCadastroComSucesso.textoBotaoVoltar
        .should("be.visible");

    TelaCadastroComSucesso.botaoVoltar
        .should("be.visible");
});

Cypress.Commands.add("validarRegrasDeNegocioTelaCadastroConcluido", () => 
{
    cy.validarRegrasDeNegocioTelaCadastro();

    TelaCadastroComSucesso.botaoVoltar
        .click();

    cy.wait(1250);

    TelaHome.slogan
        .should("be.visible");
});