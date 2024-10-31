export class telaHome
{
    //SELETORES CSS

    get logotipo() {
        return cy.get(".logo")
    }

    get slogan() {
        return cy.get("h1")
    }

    get mensagem() {
        return cy.get("body p")
    }

    get iconeBotaoCadastrePontoDeDoacao() {
        return cy.get("span svg")
    }

    get textoBotaoCadastrePontoDeDoacao() {
        return cy.get("strong")
    }

    get botaoCadastrePontoDeDoacao() {
        return cy.get("a[href='/signup']")
    }

    //METÓDOS DE AÇÃO

    verificarLogotipoVisível() {
        this.logotipo.should("be.visible")
    }

    verificarSloganVisível() {
        this.slogan.should("be.visible")
    }

    verificarMensagemVisível() {
        this.mensagem.should("be.visible")
    }

    verificarIconeBotaoCadastrePontoDeDoacaoVisível() {
        this.iconeBotaoCadastrePontoDeDoacao.should("be.visible")
    }

    verificarTextoBotaoCadastrePontoDeDoacaoVisível() {
        this.textoBotaoCadastrePontoDeDoacao.should("be.visible")
    }

    verificarBotaoCadastrePontoDeDoacaoVisível() {
        this.botaoCadastrePontoDeDoacao.should("be.visible")
    }
}