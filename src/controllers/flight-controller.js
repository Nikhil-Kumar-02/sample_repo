const { FlightService }= require('../services/index');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createflightservice(req.body);
        return res.status(201).json({
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
        return res.status(201).json({
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