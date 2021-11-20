// let x= 1;
// const p = new Promise((resolve, reject)  => {
//     if(x == 10) {
//         resolve('La variable es igual a 10');
//     }else {
//         reject('La variable es diferente de 10')
//     }
// })

// p.then(res => {
//     console.log('success: ' + res)
// })//Para una promesa debo llamar a dos metodos, then o catch
// .catch(error => {
//     console.log('error: ' + error)
// })

//se usan cuando se utilizan operaciones asincronas.

let y = 20;

// console.log('1. Proceso iniciado')

// setTimeout(() => {
//     y = y * 3 + 2;
//     console.log('2. Proceso terminado...');
// }, 2000)

// console.log('3. El resultado es: ' + y)

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         y = y * 3 + 2;
//         console.log('2. Proceso terminado...');
//         resolve(y)
//     }, 2000)

// })

// console.log('1. Proceso iniciado')
// promesa.then( res => {
//     console.log("El resultado es: "+res)
// })

let usuario = [
  {
    id: 1,
    nombre: "Marcos",
  },
  {
    id: 2,
    nombre: "Lena",
  },
];

let telefonos = [
  {
    id: 1,
    telefono: 12345678,
  },
  {
    id: 2,
    telefono: 87654321,
  },
];

const obtenerUsuario = id => {
    return new Promise((resolve, reject) =>  {
        if (usuario.find(usuario => usuario.id === id)) {
            console.log('El usuario existe y es: ' + usuario[id-1].nombre);
            resolve(obtenerTelefono(id))
        } else  {
            reject('El usuario con el id ' + id + ' no existe.')
        }
    });
};

const obtenerTelefono = id => {
    return new Promise((resolve, reject) =>  {
        if (usuario.find(telefonos => telefonos.id === id)) {
            resolve('El telefono existe y es: ' + telefonos[id-1].telefono)
        } else  {
            reject('El telefono con el id ' + id + ' no existe.')
        }
    });

}

obtenerUsuario(2)
.then( res => {
    console.log(res)
})
.catch(error => {
    console.log(error)
})