//why this file
//let say we will be making 10 repositories
//here we will have city airplane flight airport
//if we had 10 repos then we have to import all those 10 to the service layer
//which will give us hard time
//a better way to do this by exporting all of them from here only so that service has to import only 
//this file to get all the models or repositories

module.exports = {
    CityRepository : require('./city-repository'),
    FlightRepository : require('./flight-repository'),
    AirplaneRepository : require('./airplane-repository')
}