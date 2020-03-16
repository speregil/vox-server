/**
 * Configuración básica del servidor que expone el API que soporta el portal Vox
 */

//--------------------------------------------------------------------------------------
// Requerimientos
//--------------------------------------------------------------------------------------

var express = require('express');                           // Libreria base de express
var bodyParser = require('body-parser');                    // Libreria para manejar la lectura del cuerpo de una respuesta REST
var cors = require('cors');                                 // Libreria para manejar el protocolo CORS
const config = require('./config/config.js');               // Configuración del servidor

//---------------------------------------------------------------------------------------
// Rutas
//---------------------------------------------------------------------------------------

var login = require('./routes/login.route');                    // API para el manejo de login y la información del usuario

//---------------------------------------------------------------------------------------
// Servidor
//---------------------------------------------------------------------------------------

var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/', login);

// Maneja el error 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    gLog.error("El elemento no se encontró: " + req.body);
    next(err);
});

connection.init();
 
var server = app.listen(3000, function() {
    var host = '0.0.0.0';
    var port = server.address().port;
    console.log('Servidor corriendo en http://%s:%s', host, port);
});
 
module.exports = app;