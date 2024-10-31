/// <reference types="cypress" />

let tela = 2;
let funcao = 0;

describe(`${++tela}.${++funcao} - Tela Cadastro Concluido.`, () =>
{
	let cenario = 0;
	let teste = 0;

	beforeEach(() =>
	{
		cy.visit(Cypress.env("baseUrl"));

		cy.wait(2500);
	});

	context(`Cenário ${++cenario} - Validar critérios de aceite.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarCriteriosDeAceiteTelaCadastroConcluido();
		});
	});
});