import { saveAs } from 'file-saver';

const DowloadFile = async (url, name = 'MiArchivo') => {
	try {
		const xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.onload = (event) => {
			const blob = xhr.response;
			saveAs(blob, name);
		};
		xhr.open('GET', url);
		xhr.send();
	} catch (error) {
		console.log('ERROR IN DOWLOAD FILE', error);
	}
};

export default DowloadFile;
