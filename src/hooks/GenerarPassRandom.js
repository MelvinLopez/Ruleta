export const generatePassword = () =>{
    let passwordLength = randomIntFromInterval(10,20);    
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "~!#$%&*-+|";
    let allChars = numberChars + upperChars + lowerChars + specialChars;
    let randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = specialChars;
    randPasswordArray = randPasswordArray.fill(allChars, 4);
    let ResultValue;
    if(window.crypto && window.crypto.getRandomValues){
        ResultValue= shuffleArray(
            randPasswordArray.map(function(x) { 
            return x[Math.floor(
                window.crypto.getRandomValues(
                new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)] 
            })
        ).join('');  
    }
    else if(window.msCrypto && window.msCrypto.getRandomValues){
        ResultValue = shuffleArray(
            randPasswordArray.map(function(x) { 
                return x[Math.floor(
                    window.msCrypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length
                )]
            })
        ).join('');
    }else{
        ResultValue = shuffleArray(
            randPasswordArray.map(function(x) { 
                return x[Math.floor(Math.random() * x.length)] 
            })
        ).join('');
    }
    // console.log("🚀 ~ file: formUserModerador.js ~ line 283 ~ generatePassword ~ ResultValue", ResultValue)
    return document.getElementById("IdPassword").value = ResultValue
    // return ResultValue;
}

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}