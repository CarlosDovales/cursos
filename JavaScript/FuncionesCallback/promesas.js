// let miPromesa = new Promise((resolver, rechazar) => {
//     let expresion = false;
//     if (expresion) {
//         resolver('Resolvio correcto');
//     }
//     else {
//         rechazar('Se produjo un error');
//     }
// });

// //miPromesa.then( valor => console.log(valor),
// //        error => console.log(error));

// miPromesa.then( valor => console.log(valor))
// .catch(error => console.log(error));

// let promesaa = new Promise(resolver => {
//     //console.log("Inicio promesa");
//     setTimeout(() => {
//         resolver('Saludos con promesa y timeout', 3000);
//     });
//     //console.log("Fin promesa");
// });

//promesaa.then(valor => console.log(valor));

//async indica que una función regresa una promesa

// async function miFuncionConPromesa() {
//     return 'Saludos con promesa y async';
// }

//miFuncionConPromesa().then(valor => console.log(valor))

//async/await
let response;
const mysql = require("mysql");
const { resolve } = require("path/posix");
const config = require("./config.json");
const pool = mysql.createConnection({
  host: config.dbhost,
  user: config.dbuser,
  password: config.dbpassword,
  database: config.dbdatabase,
});

// async function funcionInsert() {
//   let miPromesa = new Promise((resolver) => {
//     pool.connect(function (err) {
//       if (err) throw err;
//       console.log("¡Conectado con la base de datos!");
//       let sql =
//         'INSERT INTO idp (id, spid, entityid, ssourl, slourl, idp_secret_XML_arn) VALUES (4, 1, "testidp_lambda", "testidp_lambda", "testidp_lambda", "testidp_lambda")';
//       pool.query(sql, function (err, resultidp) {
//         if (err) throw err;
//         resolver("Se han agregado datos a la base de datos");
//       });
//     });
//   });
  
// }

async function funcionConPromesaYAwait() {

  let miPromesa = new Promise((resolver) => {
    pool.connect(function (err) {
      if (err) throw err;
      console.log("¡Conectado con la base de datos!");
      let sql = "SELECT * from idp";
      pool.query(sql, function (err, resultidp, fields) {
        if (err) throw err;
        console.log("Datos adquiridos");
        resolver(resultidp);
        resolve(resultidp);
      });
      resolve('done');

    });
  });

  console.log(await miPromesa);
 
}
//funcionInsert();
funcionConPromesaYAwait();
