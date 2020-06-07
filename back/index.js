const express = require('express'); 
const router = require('./app/router');
const multer = require('multer')
const port = 5050; 
const app = express(); 


// Bodyparser for form-data encoded body form
app.use(multer().none()); 

// Bodyparser for encoded body form
app.use(express.urlencoded({extended: true}));

// Bodyparser for json type data
app.use(express.json()); 


app.use(express.static('public'));

// App router
app.use(router); 


app.listen(port, () => console.log("Running on port:", port))