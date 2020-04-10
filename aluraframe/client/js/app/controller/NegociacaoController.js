class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor");

	}

	adiciona(event){
		event.preventDefault();

		// let dataConvertida = new Date(this.inputData.value.replace(/-/g, ','));
		// let negociacao = new Negociacao(dataConvertida, this.inputQuantidade.value, this.inputValor.value);

		/* o uso dos (...) chama-se spread operator, uma forma de representar que o array passado por parâmetro 
		 * será desmembrado em parâmetros distintos da função, na sequência em que estão no array. 
		 */

		 /* arrow functions possui uma sintaxe mais curta quando comparada a uma expressão de função 
		  * (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas 
		  * expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não 
		  * podem ser usadas como construtoras (constructors).
		  */
		let dataConvertida = new Date(
				...this.inputData.value.split("-").map(
					(item, indice) => {
						if(indice == 1){
							return item-1;
						}
						return item;
					}
				)
			);
		console.log(dataConvertida);
		var negociacao = new Negociacao(dataConvertida, this.inputQuantidade.value, this.inputValor.value);
		console.log(this.inputQuantidade.value);
		console.log(this.inputValor.value);
		console.log(negociacao);
		alert("Chamou controller");
	}
}