class Negociacao {

    constructor( data, quantidade, valor ) {

        this._data = new Date( data.getTime() ); // Não usa o valor que é passado, mas cria um novo objeto em base no valor passado para que não tenha risco de ser alterado a data.
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // Ele é shallow, ou seja, superficial. Os dados dos atributos que são 
                             // objetos podem ser alterados.
    }

    get volume() {

        return this._quantidade * this._valor;

    }

    // Métodos Get para acessar atributos que não devem ser alterados!
    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }
}