const express = require("express");


const { roteador } = require('./rotas');

const app = express();

app.use(express.json());
app.use(roteador);

app.listen(3000);