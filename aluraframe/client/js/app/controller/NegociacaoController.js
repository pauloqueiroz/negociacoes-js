class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor");

	}

	adiciona(event){
		event.preventDefault();
		
		var negociacao = new Negociacao(
								DateHelper.textoParaData(this.inputData.value), 
								this.inputQuantidade.value, 
								this.inputValor.value
								);
		console.log(negociacao);
		console.log(DateHelper.dataParaTexto(negociacao.data));
	}
}