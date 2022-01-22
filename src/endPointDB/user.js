// import firebase from './../lib/firebaseConfig';
// const db = firebase.firestore().settings({ experimentalForceLongPolling: true, merge: true });
import {base} from './../lib/firebaseConfig';
const db = base;
console.log("🚀 ~ file: user.js ~ line 5 ~ db", db)

export const ollUser = async () => {
    try {
        const data = [];
        const dataGet = await db.collection('user').get();
        // console.log("🚀 ~ file: user.js ~ line 8 ~ ollUser ~ dataGet", dataGet)
        dataGet.forEach((dta) => {
            // data.push(dta.data());
            console.log("🚀 ~ file: user.js ~ line 13 ~ dataGet.forEach ~ data.push(dta.data());", data.push(dta.data()))
        });
        // return data;
        if (data) {
            const susses = {
                code: '01',
                status: 'true',
                typeStatus: 'success',
                data: data
            }
            return susses;
        } else {
            console.log('ERROR OBTENER USUARIOS', error);
            const error = {
                code: '00',
                status: 'true',
                typeStatus: 'error',
                data: []
            }
            return error;
        }
    } catch (e) {
        console.log('ERROR IN GET', e);
        const error = {
            code: '00',
            status: 'true',
            typeStatus: 'error',
            data: []
        }
        return error;
    }
};

export const obtenerUsuario = async (id) => {
	// console.log(id);
	const nota = await db.collection('user').where('uIdUsuario', '==', id).get();
	if (nota.empty) {
        const error = {
            code: '00',
			status: 'true',
			typeStatus: 'error',
			data: []
        }
        return error;
	} else {
		const susses = {
            code: '01',
			status: 'true',
			typeStatus: 'success',
			data: nota.docs[0].data()
        }
        return susses;
	}
};

export const agregarUsuarios = async (data) => {
	try {
        await db.collection('user').doc(data.uIdUsuario).set(data);
        const susses = {
            code: '01',
			status: 'true',
			typeStatus: 'success'
        }
        return susses;
	} catch (error) {
        console.log('ERROR AGREGAR USUARIOS', error);
        const errors = {
            code: '00',
            status: 'true',
			typeStatus: 'error'
        }
        return errors;
	}
};

export const agregarUsuarioEmpresa = async (data) => {
// console.log("🚀 ~ file: user.js ~ line 85 ~ agregarUsuarioEmpresa data", data)
	try {
        const doc = await db.collection('empresa').add(data);
        doc.update({ uIdEmpresa: doc.id });
        const susses = {
            code: '01',
			status: 'true',
			typeStatus: 'success'
        }
        return susses;
	} catch (error) {
        console.log('ERROR AGREGAR USUARIOS', error);
        const errors = {
            code: '00',
            status: 'true',
			typeStatus: 'error'
        }
        return errors;
	}
};

export const updateUsuario = async (data) => {
    try {
        await db.collection('user').doc(data.uIdUsuario).update(data);
        const susses = {
            code: '01',
			status: 'true',
			typeStatus: 'success'
        }
        return susses;
	} catch (error) {
        console.log('ERROR EDITAR USUARIOS', error);
        const errors = {
            code: '00',
            status: 'true',
			typeStatus: 'error'
        }
        return errors;
	}
};

export const deleteUsuario = async (id) => {
    try {
        await db.collection('user').doc(id).delete();
        const susses = {
            code: '01',
			status: 'true',
			typeStatus: 'success'
        }
        return susses;
	} catch (error) {
        console.log('ERROR EDITAR USUARIOS', error);
        const errors = {
            code: '00',
            status: 'true',
			typeStatus: 'error'
        }
        return errors;
	}
};



// var options = {
//     "datePrefix": '__DATE:',
//     "fieldValueDelete": "__DELETE",
//     "fieldValueServerTimestamp" : "__SERVERTIMESTAMP",
//     "persist": true,
//     "config" : {}
//   };
  
// //   if (cordova.platformId === "browser") {
  
//     options.config = {
//     apiKey: "AIzaSyDkYeqMNJ5Nt0s1zl7R42fGXXfRRygeO1I",
//     authDomain: "ruleta-b10b2.firebaseapp.com",
//     projectId: "ruleta-b10b2",
//     storageBucket: "ruleta-b10b2.appspot.com",
//     messagingSenderId: "766656088386",
//     appId: "1:766656088386:web:e8be38d4b626b55b04e0db"
//     };
// //   }

//   const ollUser = Firestore.initialise(options).then(function(db) {
//     // Add a second document with a generated ID.
//     db.get().collection("user").add({
//         first: "Alan",
//         middle: "Mathison",
//         last: "Turing",
//         born: 1912
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//   });
  
//   export {ollUser} 

