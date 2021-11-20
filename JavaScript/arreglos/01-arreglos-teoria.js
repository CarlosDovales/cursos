const numeros = [1,2,3,4,5];
console.log(numeros);

console.log(numeros[1])


for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
    
}

//Modificar

numeros[2] = "hola";
console.log(numeros)

//Agregar

numeros.push("kkasjdklsajd");
console.log(numeros)

numeros[numeros.length]="Agregado con length";
console.log(numeros)

numeros[8] = "Valor 8 vacio";
console.log(numeros);

console.log(typeof numeros)

console.log(Array.isArray(numeros) ? "Es un arreglo" : "No es un arreglo")

console.log(numeros instanceof Array ? "Es un arreglo" : "No es un arreglo")
