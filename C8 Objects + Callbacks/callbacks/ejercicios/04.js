function sumarArray(arrayOfNumbers, cb) {
	// Recibes un arreglo de números y un callback.
	// Suma todos los números del arreglo.
	// Este resultado debes pasárselo como argumento al callback recibido.
	// NOTA: no debes retornar nada.
	// Tu código:
	let sumOfArr = 0;

	for (let i = 0; i < arrayOfNumbers.length; i++) {
		sumOfArr += arrayOfNumbers[i];
	}
	cb(sumOfArr);
}

module.exports = sumarArray;
