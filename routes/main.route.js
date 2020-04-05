/**
 * Enrutador para el API de Login de la aplicación
 */

//-------------------------------------------------------------------------------------
// Requerimientos
//-------------------------------------------------------------------------------------

var express = require('express');                                   // Libreria base de express
var path = require('path');                               

//--------------------------------------------------------------------------------------
// Enrutamientos
//--------------------------------------------------------------------------------------

var router = express.Router();      // Enrutador a exportar

router.get('/', function(req, res, next) {
    res.sendFile(path.join(static_path + 'view/index.html'));
});

router.get('/run/index', function(req, res, next) {
    res.sendFile(path.join(static_path + 'run/index.js'));
});

module.exports = router;