/// <reference types="cypress" />

let tela = 1;
let funcao = 1;
let cenario = 1;
let teste = 0;

describe(`${++tela}.${++funcao} - Tela Cadastro.`, () =>
{
	beforeEach(() =>
	{
		cy.visit(Cypress.env("baseUrl"));

		cy.wait(2500);
	});

	context(`Cenário ${++cenario} - Validar regras de negócio.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarRegrasDeNegocioTelaCadastro();
		});
	});
});