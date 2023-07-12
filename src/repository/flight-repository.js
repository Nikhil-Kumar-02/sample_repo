const { flight } = require('../models/index');

class FlightRepository {

    async createFlight(data){
        try {
            const flights = await flight.create(data);
            return flights;
        } catch (error) {
            console.log("something went wrong at the flight repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;