function tablaDelSeis() {
	// Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
	// Desde 0 al 60.
	// Tu código:
	let tablaDel6 = [];
	let resultado = 0;

	for (let i = 0; i <= 10; i++) {
		resultado = 6 * i;
		tablaDel6.push(resultado);
	}

	return tablaDel6;
}

module.exports = tablaDelSeis;
