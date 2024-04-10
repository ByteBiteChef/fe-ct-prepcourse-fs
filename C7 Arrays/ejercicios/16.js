function multiplicarElementosPorIndice(array) {
	// Multiplica cada elemento del array por su índice.
	// Devuelve el nuevo arreglo con los resultados.
	// Tu código:
	let elemByIndex = 0;
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		elemByIndex = array[i] * i;
		newArray.push(elemByIndex);
	}
	return newArray;
}
module.exports = multiplicarElementosPorIndice;
