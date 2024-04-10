function filtrarNumerosPares(array) {
	// Devuelve un arreglo solo con los números pares presentes en el array.
	// Tu código:
	let sonPares = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			sonPares.push(array[i]);
		}
	}
	return sonPares;
}

module.exports = filtrarNumerosPares;
