function contarElementosMayoresA10(array) {
	// Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
	// Tu código:
	let arrLength = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 10) {
			arrLength.push(array[i]);
		}
	}
	return arrLength.length;
}

module.exports = contarElementosMayoresA10;
