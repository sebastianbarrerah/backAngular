const mongoose = require("mongoose");
const URL = "mongodb+srv://grupoSena:2627075Sena@cluster0.hwnb37t.mongodb.net/appAngular";
require('dotenv').config();

// Conexión a la base de datos MongoDB
mongoose.connect(URL, {
 
})
.then(() => {
  console.log("Conexión exitosa a MongoDB");
})
.catch((error) => {
  console.error("Error al conectar a MongoDB:", error);
});
