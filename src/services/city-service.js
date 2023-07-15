const { CityRepository } = require('../repository/index');
const CrudService = require('./crud-service');
//currently whenever we are creating a new cityservice object everytime a new cityrepository 
//object is being created how can we resolve this find out yourself till dont know the ans

class CityService extends CrudService {
    constructor(){
        const cityrepository = new CityRepository();
        super(cityrepository);
        this.cityRepository = new CityRepository();
    }

    // async createCity(data){
    //     try {
    //         const city = await this.cityRepository.createCity(data);
    //         return city;
    //     } catch (error) {
    //         console.log("something went wrong at the service layer");
    //         throw {error};
    //     }
    // }

    // async deleteCity(cityID){
    //     try {
    //         const response = await this.cityRepository.deleteCity(cityID);
    //         return response;
    //     } catch (error) {
    //         console.log("something went wrong at the service layer");
    //         throw {error};
    //     }
    // }
    
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

    async getAllData(prefixname){
        try {
            const city = this.cityRepository.getAllData({name : prefixname.name});
            //i am doing {name : prefixname.name} cuz if in body params other params are also sent
            //then i will be filtering it here only as the repository layer is sensitive
            return city;
        } catch (error) {
            console.log("something went wrong at the service layer");
            throw {error};
        }
    }
}

module.exports = CityService;