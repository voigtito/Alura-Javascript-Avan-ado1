class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //usa let para uso local e não criar outro global
        this._inputData = $( '#data' );
        this._inputQuantidade = $( '#quantidade' );
        this._inputValor = $( '#valor' );
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
        

    }

    adiciona( event ) {

        event.preventDefault(); // para n carregar a pagina que é default
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação realizada com sucesso!';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

        // this._listaNegociacoes.negociacoes.length = 0; consegue limpar por meio de um getter, assim como um push
        // para proteger, usa-se uma cópia do array no método get em ListaNegociacoes.js
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}