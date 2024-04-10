function duplicarElementos(array) {
	// Duplica (multiplica x2) cada elemento del array de números.
	// Devuelve un array con los duplicados.
	// Tu código:
	let iPorDos = 0;
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		iPorDos = array[i] * 2;
		newArray.push(iPorDos);
	}
	return newArray;
}

module.exports = duplicarElementos;
