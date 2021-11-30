/*
Operadores
+ suma
- resta
* multiplicación
/ división 
** exponente
% modulo
++ incremento
-- decremento

z=++a preincremento primero se incrementa y despuees de asigna a z

z=a++ postincremento primero se asigna el valor de a a z y luego se incrementa a
*/
//Precedencia de operadores, se analiza de izquierda a derecha

//Las operaciones matemáticas es por prioridades,
//Operador ternario

let resultado = (3 < 2) ? "verdadero" : "Falso";

console.log(resultado)

let numero = 8;

resultado = numero % 2 === 0 ? "Numero par" : "Numero impar"
console.log(resultado)

//Convertir un string a numero

let miNumero = "10xa";


let edad = Number(miNumero);

let lolo = isNaN(edad) ? "Se calla anote bien": "Fuck";

console.log(lolo)
console.log(edad)

// let res = (edad >= 18) ? "Mayor de edad puede votar" : "Menor de edad no puede votar";


// console.log(res)