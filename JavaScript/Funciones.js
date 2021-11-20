// const flechaFuncion = (a,b) => a + b;
// console.log(flechaFuncion(2,3))

// /* ARGUMENTOS Y PARÁMETROS */
// let sumar = function(a,b)  {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     return a + b;
// }

// console.log(sumar(1,2))

//Valores de tipo primitivos, no tienen asociados metodos ni metodos
//Paso por valor

let x = 10;

function cambiarValor(a) {
    a = 20;
}

cambiarValor(x);
console.log(x);
//Paso por referencia

const persona = {
    nombre: 'Carlos',
    apellido: 'Dovales',
    numero: 3003143194
};

function cambiarValor(p1)  {
    p1.nombre = 'cabeza maincra';
    p1.apellido = 'Reyes'
}
cambiarValor(persona)
console.log(persona)