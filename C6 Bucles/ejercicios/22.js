function combine(str1, str2, str3) {
	// Esta función debe combinar de forma alternada cada caracter de cada string.
	// La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
	// Los strings pueden tener cualquier tamaño.
	// EJEMPLOS
	// combine("abc", "", "123") == "a1b2c3"
	// combine("abc", "12345", "") == "a1b2c345"
	// combine("abc", "12345", "67") == "a16b27c345"
	let splitStr1 = str1.split("");
	let splitStr2 = str2.split("");
	let splitStr3 = str3.split("");
	let intercalar = [];
	let maxLength = Math.max(
		splitStr1.length,
		splitStr2.length,
		splitStr3.length
	);

	for (let i = 0; i < maxLength; i++) {
		if (i < splitStr1.length) intercalar.push(splitStr1[i]);
		if (i < splitStr2.length) intercalar.push(splitStr2[i]);
		if (i < splitStr3.length) intercalar.push(splitStr3[i]);
	}

	return intercalar.join("");
}

module.exports = combine;
