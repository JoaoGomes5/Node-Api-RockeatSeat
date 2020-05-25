const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//Inicializando o app
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
//iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir("./src/models");



//ROUTES
app.use('/api' , require('./src/routes'));










app.listen(port, function(){

    console.log("Server on port: " + port);
    
});