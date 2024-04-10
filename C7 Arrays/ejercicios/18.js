function promedioResultadosTest(resultadosTest) {
	// Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
	// Tu código:
	let sumOfElements = 0;

	for (let i = 0; i < resultadosTest.length; i++) {
		sumOfElements += resultadosTest[i];
	}
	return sumOfElements / resultadosTest.length;
}

module.exports = promedioResultadosTest;
