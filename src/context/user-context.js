import React, { useState, useEffect, useMemo } from 'react';
import { message } from 'antd';
import { removeItem, setItem, getItemTokent } from './../helpers/localStorage';
// import { useHistory } from "react-router-dom";
// import firebase from './../lib/firebaseConfig';
import { base, auth } from './../lib/firebaseConfig';
import { encrypt, decrypt } from './../helpers/hashID';

const UserContext = React.createContext();

export function UserProvider(props){
    // const firebaseAppAuth = firebase.auth();
    // const db = firebase.firestore();
    const firebaseAppAuth = auth;
    const db = base;
    const [userFirebase, setUserFirebase] = useState(null);
    const [userFirebaseDatabase, setUserFirebaseDatabase] = useState(null);
    const [TokenSession, setTokenSession] = useState({});
    const [CargandoUser, setCargandoUser] = useState(true);

    // Menu
        const [collapsedMenu, setCollapsedMenu] = useState(true);
        const [SeeMenu, setSeeMenu] = useState(true);
        const [theme, settheme] = useState('dark');
        // console.log("🚀 ~ file: user-context.js ~ line 22 ~ UserProvider ~ theme", theme)
    // Fin menu
    // let history = useHistory();
    // const GoLogin = () => history.push('/Login');

    const VerMenu = (val, option) => {
        if (option === 2) {
            settheme(val ? 'dark' : 'light');
        } else if (option === 3) {
            setSeeMenu(val);
        } else {
            setCollapsedMenu(val);
        }
    }

    const PTokenSession = async () => {
        return setTokenSession(await getItemTokent());
    }

    useEffect(() => {
        PTokenSession();
    }, []);

    useEffect(() => {
        if (TokenSession.estado === 'finalizado') {
            if (userFirebase && TokenSession.code === 'error') {
                firebaseAppAuth.onAuthStateChanged(function(userInfo) {
                    if (userInfo) {
                        ActualizarData(userInfo);
                    } else {
                        validarSesion(userFirebase, 1)
                    }
                });
            } else if (TokenSession.code === 'susses' && !userFirebase){
                VerificarSesionPorToken(TokenSession.token);
            }
        }
    }, [TokenSession]);

    const VerificarSesionPorToken = async (data) =>{
        // data = token sin decifrar
        if (data) {
            const tokenValido = await decrypt(data);
            firebaseAppAuth.onAuthStateChanged(function(userInfo) {
                if (userInfo) {
                    if (userInfo.refreshToken === tokenValido) {
                        console.log('los datos de la sesión se actualízaron');
                        ActualizarData(userInfo);
                    } else {
                        console.log('el token de la sesión no es valido, solicitamos una verificación de datos');
                        validarSesion(userInfo);
                    }
                } else {
                    console.log('se cerro la sesión por falta de verificación de información')
                    functionSalir();
                }
            });
        }
        setCargandoUser(false);
    }

    const validarSesion = async (data, option) => {
        if (option === 1) {
            const password = prompt('Proporcione su contraseña para volver a autenticarse');
            const credential = firebaseAppAuth.EmailAuthProvider.credential(data.email, password);
            const userDatabase = await db.collection('user').doc(data.uid).get();
            firebaseAppAuth.currentUser.reauthenticateWithCredential(credential)
                .then(result => {
                    // console.log('se valido token ');
                    const usuarioLogueado = userDatabase.data();
                    setUserFirebaseDatabase(usuarioLogueado);
                    ActualizarData(result.user);
                })
                .catch(error => {
                    console.log('No se pudo validar la sesión contraseña incorrecta');
                    functionSalir();
            });
        }
        // else {
        //     const password = prompt('Proporcione su contraseña para volver a autenticarse');
        //     const credential = auth.EmailAuthProvider.credential(data.email, password);
        //     firebaseAppAuth.currentUser.reauthenticateWithCredential(credential)
        //     .then(async result => {
        //             const userDatabase = await db.collection('user').doc(result.user.uid).get();
        //             // console.log('se valido token ');
        //             const usuarioLogueado = userDatabase.data();
        //             setUserFirebaseDatabase(usuarioLogueado);
        //             ActualizarData(result.user);
        //         })
        //         .catch(error => {
        //             console.log('No se pudo validar la sesión contraseña incorrecta');
        //             functionSalir();
        //     });
        // }
    }

    const Ingresar = async (a) => {
        // setCargandoUser(true);
		try {
            const firebaseUser = await firebaseAppAuth.signInWithEmailAndPassword(a.email, a.password);
            const userDatabase = await db.collection('user').doc(firebaseUser.user.uid).get();

            if (!userDatabase.exists) {
                message.error('El usuario no existe en nuestros registros!');
                console.log('El usuario no existe en nuestros registros!');
            } else {
                const usuarioLogueado = userDatabase.data();
                setUserFirebaseDatabase(usuarioLogueado);
                ActualizarData(firebaseUser.user, true);

                setCargandoUser(false);
                // history.push('/admin');
            }
		} catch (error) {
            setCargandoUser(false);
            functionSalir(1);
			const errorCode = error.code;
			console.log('Login/Ingresar/catch -> error', error);
			console.log('Login/Ingresar/catch -> errorCode', errorCode);
			const errorMessage = error.message;
			if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
				message.error('Correo o contraseña incorrecto');
                return 'error';
			} else {
				console.log(errorMessage);
			}
		}
    };

    const ActualizarData = async (dataUser, option) => {
        if (!option) {
            const userDatabase = await db.collection('user').doc(dataUser.uid).get();
            setUserFirebaseDatabase(userDatabase.data());
        }
        setUserFirebase(dataUser);
        const token = encrypt(dataUser.refreshToken);

        setItem('token', token);
        setItem('session', true);
        setCargandoUser(false);
    }

    const functionSalir = (option) => {
        removeItem('session');
        removeItem('token');
        setUserFirebase(null);
        setUserFirebaseDatabase(null);
        setCargandoUser(true);
        if (!option) {
            firebaseAppAuth.signOut();
        }
        // GoLogin();
    }

    const value = useMemo(() => {
        return({
            userFirebase,
            userFirebaseDatabase,
            TokenSession,
            CargandoUser,
            collapsedMenu,
            SeeMenu,
            theme,
            Ingresar,
            validarSesion,
            functionSalir,
            VerMenu,
        })
    }, [userFirebaseDatabase, userFirebase, CargandoUser, TokenSession, collapsedMenu, SeeMenu, theme]);

    return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUser debe de estar dentro del proveedor userContext');
    }
    return context;
}