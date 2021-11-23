function funcion1(){console.log('Funcion1')};

function funcion2(){console.log('Funcion2')}

funcion1();
funcion2();
 
//Callback


function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, callfunc){
    let res = op1 + op2;
    callfunc(res);
}
sumar(5,3,imprimir)

//Llamadas asincronas con setTimeout