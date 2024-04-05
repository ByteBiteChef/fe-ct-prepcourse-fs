function esFechaValida(fecha) {
	// La función recibe un argumento "fecha".
	// Comprueba si este corresponde a una fecha válida.
	// Si es así, retorna true, sino retorna false.
	// Tu código:

	const pruebaFecha = new Date(fecha);

	/// Puse esta linea para verificar si el parametro `fecha` es una instancia de date. En caso de ser un objeto 'Date' continua verificando si es una fecha valida
	if (!(fecha instanceof Date)) return false;
	if (isNaN(pruebaFecha.getTime())) {
		return false;
	} else {
		return true;
	}
}

module.exports = esFechaValida;
