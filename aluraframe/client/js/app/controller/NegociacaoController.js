class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor");

	}

	adiciona(event){
		event.preventDefault();

		let helper = new DateHelper(); 
		
		var negociacao = new Negociacao(
								helper.textoParaData(this.inputData.value), 
								this.inputQuantidade.value, 
								this.inputValor.value
								);
		console.log(negociacao);
		console.log(helper.dataParaTexto(negociacao.data));
		alert("Chamou controller");
	}
}