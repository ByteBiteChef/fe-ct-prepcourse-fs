function encontrarPrimerMultiploDeN(n, secuencia) {
	// La función recibe un numero "n" y un array de números "secuencia" como argumentos.
	// Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
	// Usa un break para detener el bucle una vez halles el múltiplo.
	// Tu código:
	let esMultiplo = null;

	for (let i = 0; i < secuencia.length; i++) {
		if (secuencia[i] % n === 0) {
			esMultiplo = secuencia[i];
			break;
		}
	}
	if (esMultiplo === null) {
		return undefined;
	}
	return esMultiplo;
}

module.exports = encontrarPrimerMultiploDeN;
