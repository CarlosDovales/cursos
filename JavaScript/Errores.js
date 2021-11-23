"use strict";

try {
    let x = 10;
    
} catch (error) {
    console.log(error );
    
} finally {
    console.log('Termina la revisión de errores.')
}

let resultado = '5';

try {
    if(isNaN(resultado)) {
        throw 'No es un numero'
    }
    
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}