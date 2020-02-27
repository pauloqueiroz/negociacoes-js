class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor");

	}

	adiciona(event){
		event.preventDefault();

		let dataConvertida = new Date(this.inputData.value.replace(/-/g, ','));
		var negociacao = new Negociacao(dataConvertida, this.inputQuantidade.value, this.inputValor.value);
		console.log(dataConvertida);
		console.log(this.inputQuantidade.value);
		console.log(this.inputValor.value);
		console.log(negociacao);
		alert("Chamou controller");
	}
}