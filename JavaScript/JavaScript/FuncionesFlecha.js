miFuncion();
function miFuncion() { 
    console.log('Saludos desde mi funcion')
}



// let flechaFuncion = () => {
//     console.log('Saludos desde la función flecha.')
// }

const flechaFuncion = () => console.log('Saludos desde la función flecha')

flechaFuncion();

const saludar = () => {return 'Saludos desde saludar';}
console.log(saludar())

const saludar2 = () => 'Saludar 2';
console.log(saludar2())

const regresaObjeto = () => ({
    nombre: 'Juan'
})
console.log(regresaObjeto().nombre)

const funcionConParametros = (mensaje) => console.log(mensaje)

funcionConParametros('Carlos')
//Con let no aplica el concepto de hoisting
