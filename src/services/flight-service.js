const { FlightRepository , AirplaneRepository } = require('../repository/index');
const comparetime = require('../utils/helper');

class FlightService {
    
    constructor(){
        //we have declared the instance of airplane now we can use its corrosponding methods
        this.airplaneRepository = new AirplaneRepository();
        //to use the flightrepository class we have to first make an instance of it
        this.flightRepository = new FlightRepository();
    }

    async createflightservice(data){

        /**
         * we will be getting all these things in the data here and we have do things carefully
         * flightNumber: 
            airplaneId: 
            departureAirportId: 
            arrivalAirportId: 
            arrivalTime: 
            departureTime: 
            price: 
            totalSeats: -> this we have to fetch from the airplane table itself
         */
        
        try {
            //before creating a flight in the database we have to make sure that the departure 
            //time should be less then the arrival time
            if(!comparetime(data.arrivalTime,data.departureTime)){
                throw {error : "arrival time cant be less then departure time"};
            }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            //we have fetched information about the airplane from its id that is seats count
            //now we can create the flight
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight; 
            //we can also do like this data.totalSeats = airplane.capacity then pass the data object
            //try running this once not ran until now do check once
        } catch (error) {
            console.log("something went wrong at the flight service layer");
            throw {error};
        }
    }


    async filterFlight(filter){
        try {
            const filteredData = await this.flightRepository.getFilteredflight(filter);
            return filteredData;
        }
        catch (error) {
            console.log("something went wrong at the flight service layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const reqFlight = await this.flightRepository.getflight(flightId);
            return reqFlight;
        } catch (error) {
            console.log("something went wrong at the flight service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;