const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            throw {error};
        }
    }

    async delteCity(cityID){
        try{
            City.destroy({
                where : {id : cityID}
            });
        }catch(error){
            throw {error};
        }
    }
}

module.exports = CityRepository;