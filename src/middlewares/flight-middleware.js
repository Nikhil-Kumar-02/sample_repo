const { CLIENT_ERRORS } = require('../utils/error-codes');

const validateFlight = (req,res,next) => {

    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(CLIENT_ERRORS.BAD_REQUEST).json({
            data : {},
            message : "some mandatory feilds are missing",
            sucess : false,
            error : "missing mandatory feilds to create a flight"
        })
    }
    next();
}

module.exports = {
    validateFlight
};