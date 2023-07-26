const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig.js');
const ApiRoutes = require('./router/index.js');

const db = require('./models/index.js');

const setupAndStartServer = async () => {
    
    //create an express object from the module
    const app = express();

    //these below two lines will create a middleware thats what .use does
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/flight/api' , ApiRoutes);

    app.listen(PORT , async () => {
        console.log(`server started at port number : ${PORT}`);
        if(process.env.sync_db){
            db.sequelize.sync({alter : true});
        }
    })
}

setupAndStartServer();