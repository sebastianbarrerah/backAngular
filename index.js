// estas son las importaciones necesarias para correr node
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Aqui se inicializa el servidor
const app = express()

// aqui se configura los Middlewares
app.use(bodyParser.json());
app.use(cors());

// Aqui se asigna el puerto para el servidor
app.listen(4000, () => {
    console.log("Esto es puerto 400");
})

// Rutas
app.use('/api/users', require('./routes/users'));

require('./libs/db')