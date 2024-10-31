/// <reference types="cypress" />

let tela = 1;
let funcao = 1;
let cenario = 0;
let teste = 0;

describe(`${++tela}.${++funcao} - Tela Cadastro.`, () =>
{
	beforeEach(() =>
	{
		cy.visit(Cypress.env("baseUrl"));

		cy.wait(2500);
	});

	context(`Cenário ${++cenario} - Validar critérios de aceite.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarCriteriosDeAceiteTelaCadastro();
		});
	});
});