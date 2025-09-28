/// <reference types="cypress" />

let tela = 2;
let funcao = 1;

describe(`${++tela}.${++funcao} - Tela Cadastro Concluido.`, () =>
{
	
	let cenario = 0;
	let teste = 0;

	beforeEach(() =>
	{
		cy.visit("https://petlov.vercel.app/");

		cy.wait(2500);
	});

	context(`Cenário ${++cenario} - Validar regras de negócio.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarRegrasDeNegocioTelaCadastroConcluido();
		});
	});
});