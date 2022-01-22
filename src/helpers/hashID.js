// Cifrado César que se convierte a ASCII 
const palabraClave = '!7D8JM$SDAI8M$14!3NW$_DKS927!¡4410O@$'; // palabra clave de encriptación
// const textoaCifrar = '4GO91FlehdR3StdaSWBqC7LQIQk2'; // para ejemplo

export const encrypt = (texto) => {
    const data = texto; //texto
    const encrypted = crypt(data,palabraClave); // dato encriptado
    const encryptedToASCII = hta(encrypted); // dato encriptado a ASCII
    return encryptedToASCII;
}

export const decrypt = async (texto) => {
    const exaample2 = await ath(texto);
    const decrypted = await crypt(exaample2,palabraClave);
    return decrypted;
}

const crypt = (data,key) => {
    let crypted="";
        for( let i=0; i<data.length; i++ ){
            crypted+=String.fromCharCode(data.charCodeAt(i)^key.charCodeAt(i%key.length));
        };
    return crypted;
}

const ath = (s) => {
// Convierte una cadena ASCII to HEX
    let ath="";
    for (let i=0; i<s.length-1; i+=2) {
        ath += String.fromCharCode(parseInt(s.substr(i,2),16));
    }
    return ath;
}

const hta = (s) => {
// Convierte una cadena HEX a ASCII
    let hta="";
    for (let i=0; i<s.length; i++) {
        let z = "0"+s.charCodeAt(i).toString(16).toUpperCase();
        hta += z.substr(z.length-2,2);
    }
    return hta;
}
