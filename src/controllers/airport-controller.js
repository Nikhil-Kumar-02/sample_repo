const { AirportService } = require('../services/index');

const airportService = new AirportService();

const createNewAirport = async (req,res) => {
    try {
        const newAirport = await airportService.create(req.body);
        return res.status(201).json({
            data : newAirport,
            sucess : true,
            message : "new airport has been sucessfully created",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : true,
            message : "Not able to create an Airport",
            error : error
        });
    }
}

const deleteAirport = async (req,res) => {
    try {
        const response = await airportService.delete(req.params.id);
        return res.status(201).json({
            data : response,
            sucess : true,
            message : "an aiport has been deleted sucessfully",
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : true,
            message : "Not able to delete an Airport",
            error : error
        });
    }
}

module.exports = {
    createNewAirport,
    deleteAirport
}