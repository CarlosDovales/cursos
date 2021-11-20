
//OBJETOS

//Los objetos pueden tener propiedades y metodos.

// let persona = {
//     nombre: 'Carlos',
//     apellido: 'Dovales',
//     email: 'carlosdovales@gmail.com',
//     numero: 3003143194,
// }

// //Al lado derecho se crea un objeto en memoria
// console.log(persona);

//Agregar un metodo a nuestros objetos

// let persona = {
//     nombre: 'Carlos',
//     apellido: 'Dovales',
//     email: 'carlosdovales@gmail.com',
//     numero: 3003143194,
//     nombreCompleto: function() {
//         //This nos permite acceder a las propiedades del objeto
//         return this.nombre + ' ' +this.apellido;
//     }
// }

// // console.log(persona.nombreCompleto())


// /*Creacion de objetos*/

// // let persona = new Object();
// // persona.nombre = 'Carlos';
// // persona.apellido = 'Dovales';
//  persona.direccion = 'Diagonal 52 # 34-14';
//  persona.barrio = 'Santa Ana';
// // persona.telefono = 3003143194;

// console.log(persona)

// //Acceder a propiedades de multiples formas

// console.log(persona.nombre);
// console.log(persona['nombre']);

// //Ciclo for para recorrer un objeto For in
// for(propiedad in persona) {
//     console.log(propiedad);
//     console.log(persona[propiedad]);
// }

// console.log(Object.keys(persona))
// console.log(Object.values(persona))

// persona.edad = 24;
// persona.edada = 26;

// delete persona.edada;


// console.log(persona)

// //Concatenar cada valor proque sale en navegadores [object Object]

// console.log(persona.nombre + ', ' + persona.apellido);

// for (const key in persona) {
//     if (Object.hasOwnProperty.call(persona, key)) {
//         const element = persona[key];
//         console.log(element)

//     }
// };

// console.log(JSON.stringify(persona))


/*metodo get y set*/

//get method

// let persona = {
//     nombre: 'Carlos',
//     apellido: 'Dovales',
//     email: 'carlosdovales@gmail.com',
//     numero: 3003143194,
//     get nombreCompleto() { //Agregando get, indica que debemos traer informacion del ibjeto ya no se coloca function de
//         This nos permite acceder a las propiedades del objeto
//         return this.nombre + ' ' +this.apellido;
//     },
//     idioma: 'es',
//     get lang()  {
//         return this.idioma.toUpperCase();
//     }, 
//     set lang( lang )  {
//         this.idioma = lang.toUpperCase()
//     }

// }
// console.log(persona.nombreCompleto)
// console.log( persona.lang)
// console.log(persona.nombreCompleto()) //Se debe indicar una funcion
// persona.lang = 'mx';

// console.log(persona)
// Función constructor
// function Persona(nombre, apellido, email) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.nombreCompleto = function(){
//         return this.nombre + ' ' + this.apellido;
//     };

// }
// //Agregando una propiedad a la clase constructor de Persona, telefono
// Persona.prototype.tel=1;
// //Metodo call, nos permite llamar un metodo que está definido en un objeto, desde otro objeto
// let padre = new Persona('Jairo', 'Dovales', 'jdovalevillamizar@yahoo.es')
// console.log(padre)
// console.log(padre.nombreCompleto())
// console.log(padre.tel)
// let madre = new Persona('Claudia', 'Galvis', 'claudiagalvis@gmail.com')
// console.log(madre.nombreCompleto())

// let miObjeto = new Object();
// let miObjeto2 =  {};

// let miCadena = new String('feo');
// let miCadena2 = '';

// let miNumero = new Number(1);
// let miNumero2 = 1;

// let miBoolean = new Boolean(true);
// let miBoolean2 = true;

// let miArreglo = new Array();
// let miArreglo2 = [];

// let miFuncion = new Function();
// let miFuncion2 = function(){};

//Metodo call, nos permite llamar un metodo que está definido en un objeto, desde otro objeto
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

//Uso de call para usar persona
//el metodo persona1.nombre con los datos de persona 26

console.log(persona1.nombreCompleto('Lic','123456789'))
console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero','3003143194'))



//Paso de argumentos a call
console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero','3003143194'))


//Usando Apply, para llamar al igual con call, pero con diferencias, los argumentos van en un arreglo.
let argumentsApply = ['Ingeniero','3003143194']
console.log(persona1.nombreCompleto.apply(persona2, argumentsApply))

