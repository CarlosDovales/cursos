for (let contador = 0; contador < 3; contador++) {
    console.log(contador)    
}
console.log("Fin de ciclo for")


//Palabra break

for(let contador = 0; contador <= 10; contador++) {
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}
console.log('Fin del ciclo for')


//Palabra continue
etiqueta: 
for (let index = 0; index <= 10; index++) {
    if(index % 2 !== 0) {
        break etiqueta;
    }
    console.log(index)

    
}
console.log('Fin del ciclo for')

//Labels  etiquetas


console.log("hola")