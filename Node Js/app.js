
const bodyParser= require('body-parser')
const express=require('express')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + '/public'), 
    express.static(__dirname + '/scripts'),
    express.static(__dirname + '/models'),
    express.static(__dirname + '/services'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/home', require('./router/RouterWeb'))


app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "Página 404",
        descripcion: "Pagina no encontrada"
    })
})

app.listen(port, () =>
{
    console.log('Servidor a su servicio en el puerto ' + port)
})