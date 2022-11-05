const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json({limit: '100mb'}));
app.use(cors());

//ROUTES
app.get('/', (req, res) => {
    res.send('Proyecto 2 Bases de Datos 2');
})

app.use('/consultas', require('./routes/consultas'));

module.exports = app;
