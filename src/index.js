const express = require('express');
const {PORT} = require('./config/serverconfig.js');

const setupAndStartServer = async () => {
    
    //create an express object from the module
    const app = express();
    
    app.listen(PORT , () => {
        console.log(`server started at port number : ${PORT}`);
    })
}

setupAndStartServer();