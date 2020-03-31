class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        //se a string é em branco, então .F.
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

    
}