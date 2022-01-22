// componente para validar rutas 
// usuario tipo 1 = super usuarrio
// usuario tipo 2 =	usuario de empresas
// usuario tipo 3 = usuario moderador
export const acionRutaValidator = (localAction, user) => {
	// const { tipoUsuario, accesos } = user;
	// if (tipoUsuario === '4053295124') {
	// 	return true;
	// } else if (tipoUsuario === 2 || tipoUsuario === 3) {
	// 	const ruta = localAction;
	// 	let istrue = false;
	// 	accesos.forEach((paths) => {
	// 		if (paths.ruta === ruta) {
	// 			if (paths.estado) {
	// 				istrue = true;
	// 			}
	// 		}
	// 	});
	// 	return istrue;
	// } else{
		return true;
		// return false;
	// } 
};

export const acionValidator = (localAction, user, accion) => {
	return true;
	// const { tipoUsuario, accesos } = user;
	// if (tipoUsuario === '4053295124') {
	// 	return true;
	// } else if (tipoUsuario === 2 || tipoUsuario === 3) {
	// 	const ruta = localAction;
    //     // console.log("🚀 ~ file: validarRuta.js ~ line 31 ~ acionValidator ~ ruta", ruta)
	// 	let istrue = false;
	// 	accesos.forEach((paths) => {
	// 		if (paths.ruta === ruta) {
	// 			// console.log('paths.accesos', paths.accesos)
	// 			paths.accesos.forEach((data) => {
	// 				if (accion === data.accion) {
	// 					// console.log(data.accion)
	// 					if (data.estado) {
	// 						istrue = true;
	// 					}
	// 				}
	// 			})
	// 		}
	// 	});
	// 	return istrue;
	// } else{
	// 	return false;
	// } 
};
