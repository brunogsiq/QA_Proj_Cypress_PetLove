export class telaCadastro
{
    //SELETORES CSS

    get logotipo() {
        return cy.get("[alt='Logo']")
    }

    get iconeBotaoVoltarParaHome() {
        return cy.get("a[href='/'] svg")
    }

    get textoBotaoVoltarParaHome() {
        return cy.get("a[href='/']")
    }

    get BotaoVoltarParaHome() {
        return cy.get("a[href='/']")
    }

    get tituloFormularioDeCadastro() {
        return cy.get("h1")
    }

    get subTituloFormularioDeCadastro() {
        return cy.get("body p")
    }

    get campoNome() {
        return cy.get("[name='name']")
    }

    get campoEmail() {
        return cy.get("[name='email']")
    }

    get tituloEndereco() {
        return cy.get("h2").eq(0)
    }

    get informativoCEP() {
        return cy.get(".form-header span")
    }

    get campoCEP() {
        return cy.get("[name='cep']")
    }

    get botaoBuscarCEP() {
        return cy.get("[value='Buscar CEP']")
    }

    get campoRua() {
        return cy.get("[name='addressStreet']")
    }

    get campoNumero() {
        return cy.get("[name='addressNumber']")
    }

    get campoComplemento() {
        return cy.get("[name='addressDetails']")
    }

    get campoBairro() {
        return cy.get("[name='addressDistrict']")
    }

    get campoCidadeEstado() {
        return cy.get("[name='addressCityUf']")
    }

    get textoPetParaDoacao() {
        return cy.get(".form-header h2")
    }

    get iconeBotaoCachorro() {
        return cy.get("[alt='Cachorros']")
    }

    get textoBotaoCachorro() {
        return cy.get(".signup-pet > li > span").eq(0)
    }

    get iconeBotaoGato() {
        return cy.get("[alt='Gatos']")
    }

    get textoBotaoGato() {
        return cy.get(".signup-pet > li > span").eq(1)
    }

    get botaoCachorro() {
        return cy.get(".signup-pet > li > span").eq(0)
    }

    get botaoGato() {
        return cy.get(".signup-pet > li > span").eq(1)
    }

    get botaoCadastrar() {
        return cy.get(".button-register")
    }
}