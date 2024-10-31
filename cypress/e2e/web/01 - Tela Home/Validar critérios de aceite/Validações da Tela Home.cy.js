/// <reference types="cypress" />

let tela = 0;
let funcao = 0;
let cenario = 0;
let teste = 0;

describe(`${++tela}.${++funcao} - Tela Home.`, () =>
{
	context(`Cenário ${++cenario} - Validar critérios de aceite.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarCriteriosDeAceiteTelaHome();
		});
	});
});