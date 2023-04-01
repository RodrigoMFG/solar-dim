// Modulos Node
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

//Configs
	// Body Parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    // Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine' , 'handlebars');
    //DB config
        //Pendente

//Rotas
    app.get('/', (req,res) =>{
        res.send("Main Page");
    })

    app.get('/about', (req,res) =>{
        res.send("About Page");
    })

    app.get('/error', (req,res) =>{
        res.send("Error Page");
    })

//Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("SERVER RUNNING")
})