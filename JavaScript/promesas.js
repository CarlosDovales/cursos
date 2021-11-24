// //Promesas: se usan callback, codigos de estados, si se resolvio se usa .then y si hubo error se usa catch 

// let miPromesa = new Promise((resolve, reject) => {
//     let expresion = true;
//     if(expresion) {
//         resolve('Resolvió correto');
//     } else {
//         reject('Se produjo un error')
//     }
// });
// // miPromesa.then(
// //     valor => console.log(valor),
// //     error => console.log(error),
// // )

// miPromesa.then(
//     valor => console.log(valor),
// ).catch(
//     error => console.log(error),
// )


// let promesa1 = new Promise((resolve) => {
//     console.log('Inicio promesa');
//     setTimeout(() => {
//         resolve('saludos con promesa y timeout')
//     }, 3000)
//     console.log('Fin promesa')
// })

// promesa1.then(valor => console.log(valor));

// //Async, obliga a la funcion a devolver una promesa de la
// async function miFuncionPromesa() { 
//     return 'Saludos con promesa y async';
// }

// miFuncionPromesa().then(valor => console.log(valor));

// //Asycn//await 

// async function funcionAsyncAwait() { 
//     let myPromise = new Promise( resolve => { 
//         resolve('Promesa con await')
//     })

//     console.log(await myPromise);
// }
// funcionAsyncAwait()


//Async/Await/setTimeout

async function funcionPromesaAwaitTimeout() {
    console.log('Inicio setTimeout promesa await')
    let miPromesa3 = new Promise( resolve => {
        setTimeout(() => resolve('Promesa con setTimeout await',3000));
    })
    console.log(await miPromesa3);
    console.log('Fin madafaca')
}
funcionPromesaAwaitTimeout();

