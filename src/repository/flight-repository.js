const { flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(filterdata){
        const newFilter = {};
        //or we can use below as we are assiging same for everything except price
        //so the things where we are assigning the same need not to be done now
        // const newFilter = {...filterdata};

        if(filterdata.arrivalAirportId){
            newFilter.arrivalAirportId = filterdata.arrivalAirportId;
        }
        if(filterdata.departureAirportId){
            newFilter.departureAirportId = filterdata.departureAirportId;
        }

        // if(filterdata.minPrice){
        //     Object.assign(newFilter ,{price : { [Op.gte] : filterdata.minPrice} });
        // }
        // if(filterdata.maxPrice){
        //     Object.assign(newFilter ,{price : { [Op.lte] : filterdata.maxPrice} });
        // }but this will replace the already existing price with minPrice
        
        if(filterdata.minPrice && filterdata.maxPrice){
            Object.assign(newFilter , {
                [Op.and] : [ 
                    {
                        price : { [Op.gte] : filterdata.minPrice}
                    } ,{
                        price : { [Op.lte] : filterdata.maxPrice}
                    } 
                ]
            });
        }
        // now if we dont have both of them then we can assign each of them seperately
        if(filterdata.minPrice){
            Object.assign(newFilter ,{price : { [Op.gte] : filterdata.minPrice} });
        }
        if(filterdata.maxPrice){
            Object.assign(newFilter ,{price : { [Op.lte] : filterdata.maxPrice} });
        }
        //but if both min and max is present then all three ifs will be executed then 
        //how values are assigned in object.assign
        // console.log(newFilter);
        /*
            {
                price: { [Symbol(lte)]: '6000' },
                [Symbol(and)]: [ { price: [Object] }, { price: [Object] } ]
            }
            only lte, as for price key first gte was there now lte is present
        */

        //got it,here two times same conditions are used using and so is not making any difference
        /*
        FROM `flights` AS `flight` WHERE (`flight`.`price` >= '4000' AND `flight`.`price` <= '6000') AND `flight`.`price` <= '6000';
        */
        //so either put other is not present or use below as two times same query is not efficient
        //line 15 to 40 can also be done in below way

        // let filterArray = [];
        // if(filterdata.minPrice){
        //     filterArray.push({price : {[Op.gte] : filterdata.minPrice}});
        // }
        // if(filterdata.maxPrice){
        //     filterArray.push({price : { [Op.lte] : filterdata.maxPrice}});
        // }
        // Object.assign(newFilter , { [Op.and] : filterArray });
        
        //for TIME
        if(filterdata.arrivalTime){
            newFilter.arrivalTime = { [Op.lte] : filterdata.arrivalTime};
        }
        if(filterdata.departureTime){
            newFilter.departureTime = { [Op.lte] : filterdata.departureTime };
        }

        return newFilter;
    }

    async createFlight(data){
        try {
            const flights = await flight.create(data);
            return flights;
        } catch (error) {
            console.log("something went wrong at the flight repository layer");
            throw {error};
        }
    }


    //below will give the data of only one flight that we want explicitly that is 
    //for boarding as for boarding we know which flight we are having so no
    //need to search in the whole database
    async getflight(flightId){
        try {
            console.log('reached the flight repo')
            const flights = await flight.findByPk(flightId);
            return flights;
        } catch (error) {
            console.log("something went wrong at the flight repository layer");
            throw {error};
        }
    }


    //here we are about to use the custom filteration
    //that is on the basis of price,place,distination,time,date or combination of any filters 
    //in the req order
    async getFilteredflight(filter){
        try {
            const createdFilterObject = this.#createFilter(filter);
            const flights = await flight.findAll({
                where : createdFilterObject
            });
            /*
                how above will look like
                {
                    where : {
                        arrivalAirportId : 4,
                        departureAirportId : 7,
                        price : {
                            [Op.gte] : minPrice
                        }
                    }
                }
            */
            return flights;
        } catch (error) {
            console.log("something went wrong at the flight repository layer");
            throw {error};
        }
    }

    //i will be updating the seats of the flight whose id i will be recieving here
    async updateFlight(data , flightNumber){
        try {
            //here we have hardcoded the flightNumber explicitly but we can also create the 
            //filter for this just like above and pass that object || where : createdFilterObject
            const UpdatedFlightDetails = await flight.update(data , {
                where : {
                    flightNumber : flightNumber
                }
            })
            return UpdatedFlightDetails;
        } catch (error) {
            console.log("something went wrong at the flight repository layer while updating seats");
            throw {error};
        }
    }
}

module.exports = FlightRepository;