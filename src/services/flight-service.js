const { FlightRepository , AirplaneRepository } = require('../repository/index');
const comparetime = require('../utils/helper');
const UserAuthentication = require('../utils/authentication');

class FlightService {
    
    constructor(){
        //we have declared the instance of airplane now we can use its corrosponding methods
        this.airplaneRepository = new AirplaneRepository();
        //to use the flightrepository class we have to first make an instance of it
        this.flightRepository = new FlightRepository();
        this.userAuthentication = new UserAuthentication();
    }

    //before creating/updating an instance of a flight we have to make sure that the person
    //is eligible to create a flight or not that is if he has admin authority or not
    //so he should be both authenticated and authorised as admin
    //i am defining the logic here as creation of flight is not something done on regular basis
    //so for now it makes no sense to ME to define it on the api gateway

    async updateFlight(data , flightNumber){
        try {
            const updatedDetails = await this.flightRepository.updateFlight(data , flightNumber);
            return updatedDetails;
        } catch (error) {
            console.log("something went wrong at the flight service layer while updating");
            throw {error};
        }
    }

    async createflightservice(data,token,userId){

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
            //check if the incoming user has valid token and is admin as well
            const isTokenValid = await this.userAuthentication.isUserAuthenticated(token);
            console.log('the response after calling from the flight service' , isTokenValid);
            //if the token is valid then it will have sucess as true and will also have user id

            const userId = isTokenValid.data;            
            //now if the user token is valid then we also have to check if the user is admin or not
            await this.userAuthentication.isUserAdmin(userId);
            
            //before creating a flight in the database we have to make sure that the departure 
            //time should be less then the arrival time
            if(comparetime(data.arrivalTime,data.departureTime)){
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
            if(error.name == "the sent token is not valid"){
                throw error.name;
            }
            if(error.name == "User is not ADMIN and only admin can create flight"){
                throw error.name;
            }
            console.log("something went wrong at the flight service layer");
            throw {error};
        }
    }


    async filterFlight(filter){
        try {
            const filteredData = await this.flightRepository.getFilteredflight(filter);

        /*       
        
            const filteredData = await this.flightRepository.getFilteredflight(filter);
            console.log('the recieved filtered airport results : ' , filteredData);
            filteredData.forEach(async (entry) => {
                const departureAirportId = entry.dataValues.departureAirportId;
                const arrivalAirportId = entry.dataValues.arrivalAirportId;
                const departureAirportName = await this.flightRepository.getAirportName(departureAirportId);
                const arrivalAirportName = await this.flightRepository.getAirportName(arrivalAirportId);
                entry.dataValues.From_Airport = departureAirportName.dataValues.name;
                entry.dataValues.To_Airport = arrivalAirportName.dataValues.name;
                console.log(entry.dataValues);
                console.log('hhaaa')
            });
            console.log('below printing the modified data  :')
            console.log('the modified data is : ',filteredData)
            return filteredData;

        The reason why you are not getting the desired result when using the forEach loop is due to the asynchronous nature of the code inside the loop. When you use forEach, it does not wait for the asynchronous operations (database queries using await) to complete before moving to the next iteration. This means that the modifications you make inside the loop may not have completed when you return filteredData.

        In the case of the forEach loop, you are using await inside the loop, which makes the function asynchronous, but forEach itself doesn't handle promises or await. So, the loop continues without waiting for the promises to resolve, and the console.log('below printing the modified data :') statement executes before the asynchronous operations are finished, resulting in the original filteredData being logged without the modifications.

        In contrast, the for...of loop, combined with await, ensures that each iteration waits for the asynchronous operations to complete before moving to the next one. As a result, the modifications are made in the correct order, and the console.log('the modified data is : ', filteredData) statement inside the loop is executed when the modifications have taken place.

        To fix this issue with the forEach loop, you can use Promise.all to wait for all the asynchronous operations to complete before returning the modified filteredData.
        */

            //we are recieving the departure and arrival airport id but we want its names
            const promises = [];
            filteredData.forEach(async (entry) => {
                const departureAirportId = entry.dataValues.departureAirportId;
                const arrivalAirportId = entry.dataValues.arrivalAirportId;
                
                const departureAirportNamePromise = this.flightRepository.getAirportName(departureAirportId);
                promises.push(departureAirportNamePromise);
                
                const arrivalAirportNamePromise = this.flightRepository.getAirportName(arrivalAirportId);
                promises.push(arrivalAirportNamePromise);
                
                const departureAirportName = await departureAirportNamePromise;
                const arrivalAirportName = await arrivalAirportNamePromise;
                
                entry.dataValues.From_Airport = departureAirportName.dataValues.name;
                entry.dataValues.To_Airport = arrivalAirportName.dataValues.name;
            });
            const modifiedFilteredData = await Promise.all(promises);
            return filteredData;
            //both the above and below code works fine
            // for (const entry of filteredData) {
            //     const departureAirportId = entry.dataValues.departureAirportId;
            //     const arrivalAirportId = entry.dataValues.arrivalAirportId;
            
            //     // Now get the name of the airports from the corresponding ids
            //     const departureAirportName = await this.flightRepository.getAirportName(departureAirportId);
            //     const arrivalAirportName = await this.flightRepository.getAirportName(arrivalAirportId);
            
            //     entry.dataValues.From_Airport = departureAirportName.dataValues.name;
            //     entry.dataValues.To_Airport = arrivalAirportName.dataValues.name;
                
            //     console.log(entry.dataValues);
            // }
        
            // console.log('Below printing the modified data:');
            // console.log('The modified data is:', filteredData);
            // return filteredData;
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