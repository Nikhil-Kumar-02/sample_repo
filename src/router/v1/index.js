const express = require('express');
const CityController = require('../../controllers/city-controllers');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/city' , CityController.create);
router.delete('/city/:id' , CityController.destroy);
router.get('/city/:id' , CityController.get);
router.patch('/city/:id' , CityController.update);
router.get('/city' , CityController.getAll)

router.post('/createFlight',FlightMiddlewares.validateFlight , FlightController.create);
router.get('/getFlights',FlightController.Filteredflight);
router.get('/flightById/:id',FlightController.getFlight);
router.patch('/updateFlight/:feild' , FlightController.updateFlight);

router.post('/airports',AirportController.createNewAirport);
router.delete('/airports/:id',AirportController.deleteAirport);

module.exports = router;