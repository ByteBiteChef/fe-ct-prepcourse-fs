function encontrarNumeroFaltante(numeros) {
	// La función recibe un argumento "numeros" correspondiente a un array de números.
	// Encuentra el número faltante en una secuencia de números enteros consecutivos
	// y retórnalo.
	// Devuelve null si el array es vacío o si no hay números faltantes.
	// Tu código:
	let missingNum = null;

	if (numeros.length < 1) return null;

	for (let i = 0; i < numeros.length - 1; i++) {
		if (numeros[i] + 1 !== numeros[i + 1]) {
			missingNum = numeros[i] + 1;
			break;
		}
	}
	return missingNum;
}

module.exports = encontrarNumeroFaltante;
