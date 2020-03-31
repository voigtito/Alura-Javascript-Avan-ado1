// criado para encapsular a lista de negociações
class ListaNegociacoes {
    
    constructor() {
        this._negociacoes = [];
    }

    // criado para adicionar a negociacoes
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    // método get para leitura
    get negociacoes(){

        return [].concat(this._negociacoes); // cria um array zero que pega por meio do método concat uma cópia da lista de negociacoes

    }
}