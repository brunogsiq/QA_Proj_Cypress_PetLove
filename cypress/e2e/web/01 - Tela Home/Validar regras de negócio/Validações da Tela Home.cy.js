/// <reference types="cypress" />

let tela = 0;
let funcao = 1;

describe(`${++tela}.${++funcao} - Tela Home.`, () =>
{

	let cenario = 0;
	let teste = 0;

	context(`Cenário ${++cenario} -  Validar regras de negócio.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarRegrasDeNegocioTelaHome();
		});
	});
});