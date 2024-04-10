function obtenerElementoAleatorio(array) {
	// Devuelve un elemento aleatorio del arreglo array.
	// PISTA: Usa el método Math.random().
	// Tu código:
	let randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
}

module.exports = obtenerElementoAleatorio;
