let numero = 1;

let numeroTexto = '';

switch( numero ) {
    case 1:
        numeroTexto = ' Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
}

console.log(numeroTexto)


///Estructura estricta, es decir, si en la entrada comparativa del switch hay un numero
//El lee numero, pero si hay string lee string
