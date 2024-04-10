function encontrarIndiceMayor(array) {
	// Encuentra el índice del número más grande en el array de números.
	// Devuelve el valor de este índice.
	// Tu código:
	let biggestNumIndex = 0;

	if (array.length === 0 || array.length === 1) return 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[biggestNumIndex]) {
			biggestNumIndex = i;
		}
	}
	return biggestNumIndex;
}

module.exports = encontrarIndiceMayor;
