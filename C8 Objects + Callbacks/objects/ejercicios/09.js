function nuevoUsuario(nombre, email, password) {
	// Debes crear un nuevo objeto.
	// Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
	// Retorna el objeto creado.
	// Tu código:
	let newObj = {};

	newObj["nombre"] = nombre;
	newObj["email"] = email;
	newObj["password"] = password;

	return newObj;
}

module.exports = nuevoUsuario;
