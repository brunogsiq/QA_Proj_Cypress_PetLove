/// <reference types="cypress" />

let tela =0;
let funcao = 0;
let cenario = 1;
let teste = 0;

describe(`${++tela}.${++funcao} - Tela Home.`, () =>
{
	context(`Cenário ${++cenario} - Validar regras de negócio.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarRegrasDeNegocioTelaHome();
		});
	});
});