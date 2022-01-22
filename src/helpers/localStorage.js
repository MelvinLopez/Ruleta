const checkout = typeof window !== 'undefined' ? true : null

export const setItem = (key, value) => checkout ? window.localStorage.setItem(key, JSON.stringify(value)) : null;

export const getItem = async (key) => {
	const item = await window.localStorage.getItem(key);
	return item !== 'undefined' ? JSON.parse(item) : '';
};

export const getItemTokent = async () => {
	const item = await window.localStorage.getItem('token');
	const item2 = item !== 'undefined' ? JSON.parse(item) : 'error';

	let data = {};
	// si no hay token t en el local storage  el resultado es 'null'
	if (item2 === null) {
		return data = {
			'token' : 'error',
			'estado' : 'dontExist',
			'code' : 'error'
		}
	} else if (item2 === 'error') {
		return data = {
			'token' : item2,
			'estado' : 'finalizado',
			'code' : 'error'
		}
	} else {
		return data = {
			'token' : item2,
			'estado' : 'finalizado',
			'code' : 'susses'
		}
	}
};

export const removeItem = (key) => checkout ? window.localStorage.removeItem(key) : false;

export const clearStorage = () => checkout ? window.localStorage.clear() : false;
