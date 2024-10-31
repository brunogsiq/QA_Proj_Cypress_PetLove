export class telaCadastroComSucesso
{
    //SELETORES CSS

    get logotipo() {
        return cy.get("[alt='Petlov']")
    }

    get tituloMensagem() {
        return cy.get("h1")
    }

    get textoMensagem() {
        return cy.get("body p")
    }

    get iconeBotaoVoltar() {
        return cy.get("span")
    }

    get textoBotaoVoltar() {
        return cy.get("strong")
    }

    get botaoVoltar() {
        return cy.get("a[href='/signup']")
    }
}