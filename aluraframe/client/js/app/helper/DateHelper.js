class DateHelper{
	
	constructor(){
		throw new Error("Essa classe não pode ser instanciada");
	}

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

	static textoParaData(texto){
		return new Date(
				...texto
					.split("-")
					.map(
						(item, indice) => {
							if(indice == 1){
								return item-1;
							}
							return item;
						}
				)
			);
	}

	static dataParaTexto(data){
		return data.getDate() 
				+ "/" + (data.getMonth()+1)
				+ "/" + (data.getFullYear());
	}
}