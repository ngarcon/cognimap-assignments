const fs = require('fs');
const path = require('path'); 


const mainController = {

    getMain: (req, res)=> {
        res.sendFile(path.resolve(__dirname, '../../index.html')); 
    }, 

    sayHello: (req, res)=> {
        res.send({result: 'ok'}); 
    },

    writeInFile: async (req, res)=> {

        try {

            const {fileName} = req.params; 

            const {message} = req.body; 

            console.log('fileName', fileName); 
            console.log('message', message); 

            await fs.writeFileSync(`./app/files/${fileName}.txt`, message); 

            res.send({result: 'done'}); 
        } catch (error) {
            console.log(error);
        }

    },

    notFound: (req, res)=> {
        res.status(404).send({result: 'Ressources not found'})
    }, 

}

module.exports = mainController ;