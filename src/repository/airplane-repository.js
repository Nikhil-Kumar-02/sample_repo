const { Airplane } = require('../models/index');

class AirplaneRepository{

    async getAirplane(id){
        //we will be getting the plane id as data and we have to return the plane object as a result
        //we dont need to create a entry in airplane as we have already done that usign seeders 
        try {
            const reqAirplane = await Airplane.findByPk(id);
            return reqAirplane;
        } catch (error) {
            console.log("something went wrong at the airpane repository layer");
            throw {error};
        }
    }

}

module.exports = AirplaneRepository;