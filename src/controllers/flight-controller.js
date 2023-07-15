const { FlightService }= require('../services/index');
const { SUCESS_CODES } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        //current i am directly passing the req.body here but technically we should not
        //as some extra unwanted data might come along and we have to pass only the
        //usable feilds otherwise it will make data heavy and bloating my req.body

        const FlightReqData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        // const flight = await flightService.createflightservice(req.body);
        const flight = await flightService.createflightservice(FlightReqData);
        
        return res.status(SUCESS_CODES.CREATED).json({
            data : flight,
            sucess : true,
            message : "flight has been created sucessfully",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            message : "Not able to create a flight",
            err : error
        })   
    }
}

const Filteredflight = async (req,res) => {
    try {
        // console.log(req.query);
        const filteredData = await flightService.filterFlight(req.query);
        return res.status(SUCESS_CODES.OK).json({
            data : filteredData,
            sucess : true,
            message : "flight has been fetched sucessfully",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            message : "Not able to get the flight",
            err : error
        })   
    }
}

module.exports = {
    create,
    Filteredflight
}