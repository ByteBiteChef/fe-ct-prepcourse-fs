function convertirStringAMayusculas(array) {
	// Convierte a mayúsculas todos los strings del array.
	// Retorna el arreglo resultante.
	// Tu código:
	let enMayus = [];
	for (let i = 0; i < array.length; i++) {
		enMayus.push(array[i].toUpperCase());
	}

	return enMayus;
}

module.exports = convertirStringAMayusculas;
