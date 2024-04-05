function invertirTexto(texto) {
	// La función recibe un argumento "texto" que es un string.
	// Tu objetivo es invertir el string y devolver el string invertido.
	// Tu código:
	let splitTexto = texto.split("");
	let reverseTexto = splitTexto.reverse();
	let joinTexto = reverseTexto.join("");

	return joinTexto;
}

module.exports = invertirTexto;
