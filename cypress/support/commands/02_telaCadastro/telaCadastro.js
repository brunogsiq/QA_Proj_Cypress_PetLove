/// <reference types="cypress" /> 

import { telaHome } from "../../pageObjects/01_telaHome/telaHome";
import { telaCadastro } from "../../pageObjects/02_telaCadastro/telaCadastro";

//Inicializa os Page Objects
const TelaHome = new telaHome();
const TelaCadastro = new telaCadastro();

Cypress.Commands.add("validarCriteriosDeAceiteTelaCadastro", () => 
{
    TelaHome.botaoCadastrePontoDeDoacao
        .click();

    TelaCadastro.logotipo
        .should("be.visible");
    TelaCadastro.iconeBotaoVoltarParaHome
        .should("be.visible");
    TelaCadastro.textoBotaoVoltarParaHome
        .should("be.visible");
    TelaCadastro.BotaoVoltarParaHome
        .should("be.visible");
    TelaCadastro.tituloFormularioDeCadastro
        .should("be.visible");
    TelaCadastro.subTituloFormularioDeCadastro
        .should("be.visible");
    TelaCadastro.campoNome
        .should("be.visible");
    TelaCadastro.campoEmail
        .should("be.visible");
    TelaCadastro.tituloEndereco
        .should("be.visible");
    TelaCadastro.informativoCEP
        .should("be.visible");
    TelaCadastro.campoCEP
        .should("be.visible");
    TelaCadastro.botaoBuscarCEP
        .should("be.visible");
    TelaCadastro.campoRua
        .should("be.visible");
    TelaCadastro.campoNumero
        .should("be.visible");
    TelaCadastro.campoComplemento
        .should("be.visible");
    TelaCadastro.campoBairro
        .should("be.visible");
    TelaCadastro.campoCidadeEstado
        .should("be.visible");
    TelaCadastro.textoPetParaDoacao
        .should("be.visible");
    TelaCadastro.iconeBotaoCachorro
        .should("be.visible");
    TelaCadastro.textoBotaoCachorro
        .should("be.visible");
    TelaCadastro.iconeBotaoGato
        .should("be.visible");
    TelaCadastro.textoBotaoGato
        .should("be.visible");
    TelaCadastro.botaoCachorro
        .should("be.visible");
    TelaCadastro.botaoGato
        .should("be.visible");
    TelaCadastro.botaoCadastrar
        .should("be.visible");
});

Cypress.Commands.add("validarRegrasDeNegocioTelaCadastro", () => 
{
    TelaHome.botaoCadastrePontoDeDoacao
        .click();
});