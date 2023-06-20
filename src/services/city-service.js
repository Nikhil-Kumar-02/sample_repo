const { CityRepository } = require('../repository/index');

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }
    }

    async deleteCity(cityID){
        try {
            const response = await this.cityRepository.deleteCity(cityID);
            return response;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }
    }
    
    async updateCity(data , cityID){
        try {
            const city = this.cityRepository.updateCity(data,cityID);
            return city;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }
    }
    
    async getCity(cityID){
        try {
            const city = this.cityRepository.getCity(cityID);
            return city;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }
    }
}

module.exports = CityService;