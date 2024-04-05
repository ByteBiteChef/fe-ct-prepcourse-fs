function esParYDivisiblePorTres(a) {
	// La función recibe un número "a" por argumento.
	// Retorna true si este es par y divisible por tres a la vez.
	// Retorna false si no lo es.
	// Tu código:
	let esPar = Number.isInteger(a / 2);
	let divEnTres = Number.isInteger(a / 3);

	if (esPar === true && divEnTres === true) {
		return true;
	} else {
		return false;
	}
}

module.exports = esParYDivisiblePorTres;
