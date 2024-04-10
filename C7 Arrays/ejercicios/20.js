function todosIguales(array) {
	// Si todos los elementos del arreglo son iguales, retornar true.
	// Caso contrario, retornar false.
	// Tu código:
	if (array.length === 0) return undefined;

	let firstElement = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] !== firstElement) {
			return false;
		}
	}
	return true;
}

module.exports = todosIguales;
