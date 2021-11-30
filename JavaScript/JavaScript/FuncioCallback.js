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

//Llamadas asincronas con setTimeout, nos permite iniciar una nueva tarea de

function miFuncionCallback(){
    console.log('Saludo asincrono mi funcion callback después de 5 segundos');
}

setTimeout(miFuncionCallback, 6000)
setTimeout(() => {
    console.log('Set time out para funcion flecha')
}, 7000)


//SetInterval: Manda a llamar la funcion callback cada cierto tiempo
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`)
}
setInterval(reloj,1000)
