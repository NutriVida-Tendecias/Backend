const express = require('express');
const connectDb = require('./config/connectDb');

// Configuración de variables de entorno
require('dotenv').config();

// Conexión a la base de datos MongoDB
connectDb();

const app = express();
const PORT = process.env.PORT || 3000;

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
