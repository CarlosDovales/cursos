//Tipos de datos: string

var nombre = 'Carlos';
console.log(nombre)

//number

var numero = 1000;
console.log(numero)

//Cambiar la variable

nombre=10;
console.log(typeof nombre)
//objeto

var objeto = {
    nombre: 'Carlos',
    cedula: 1096235380,
    apellido: 'Dovales'
}

console.log(objeto)
console.log(objeto.cedula)
console.log(typeof objeto)

//Boolean (true | false)

var booleanVar = true;
console.log(typeof booleanVar)

//Funciones

function miFuncion() {
}

console.log(typeof miFuncion)


//Symbol
//Creación de una variable unica

var simbolo = Symbol("Mi simbolo");
console.log(simbolo)


//Clases

class Personas {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
} //Las clases son de tipo funciones

console.log(typeof Personas)


//Undefine

var x;
console.log(x)
console.log(typeof x)

//Null = ausencia de valor

var y = null;
console.log(y)
console.log(typeof y)

//Arreglos o arrays

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos)
console.log(typeof autos)


//Cadenas vacias

var z = '';
console.log(z);
console.log(typeof z)

//Concatenaciones, JS analiza de izquierda a derecha, y prioriza parentesis

var x = 5 + 4 +'carlos';
console.log(x)
var y = 'carlos' + 4 + 5;
console.log(y)
var y = 'carlos' +( 4 + 5);
console.log(y);

