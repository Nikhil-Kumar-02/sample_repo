const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverconfig.js');
const ApiRoutes = require('./router/index.js');

const {Airport,City} = require('./models/index.js');

const setupAndStartServer = async () => {
    
    //create an express object from the module
    const app = express();

    //these below two lines will create a middleware thats what .use does
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api' , ApiRoutes);

    app.listen(PORT , async () => {
        console.log(`server started at port number : ${PORT}`);
        const citydata = await City.findOne({
            where : {
                id : 20
            }
        })
        const airportdata = await citydata.getAirports();
        console.log(citydata,airportdata);
    })
}

setupAndStartServer();