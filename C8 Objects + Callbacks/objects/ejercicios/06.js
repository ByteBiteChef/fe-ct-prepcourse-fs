const contarPropiedades = (objeto) => {
	// Cuenta y retorna el total de propiedades que tiene el objeto.
	// PISTA: Puedes iterarlo usando el bucle for-in.
	// Tu código:
	let count = 0;

	for (const propiedades in objeto) {
		if (objeto.hasOwnProperty(propiedades)) {
			count++;
		}
	}
	return count;
};

module.exports = contarPropiedades;
