const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig.js');


const setupAndStartServer = async () => {
    
    //create an express object from the module
    const app = express();

    //these below two lines will create a middleware thats what .use does
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.listen(PORT , () => {
        console.log(`server started at port number : ${PORT}`);
    })
}

setupAndStartServer();