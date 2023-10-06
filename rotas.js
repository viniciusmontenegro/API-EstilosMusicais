const express = require("express")
const { bancodedados } = require('./bancoDeDados/bancodedados');
const { encontrarBanda } = require('./controladores/encontrarBandas');
const roteador = express();


roteador.get('/bandas/:estiloMusical', encontrarBanda);



module.exports = { roteador }