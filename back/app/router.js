const express = require('express');
const router = express.Router(); 

// Controller
const mainController = require('./controllers/mainController'); 

router.get('/', mainController.getMain); 

router.get('/api/hello', mainController.sayHello); 

router.post('/api/writeFile/:fileName', mainController.writeInFile); 

router.use(mainController.getMain)

module.exports = router; 