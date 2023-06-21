const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("something went wrong at the repository layer");
            throw {error};
        }
    }
    
    async deleteCity(cityID){
        try{
            const city = await City.destroy({
                where : {id : cityID}
            });
            return true;
            //we are retrning here as in city-service we are expecting to get something back
        }catch(error){
            console.log("something went wrong at the repository layer");
            throw {error};
        }
    }
    
    async updateCity(data , cityID) {
        try {
            // const city = await City.update(data , {
            //     where : {
            //         id : cityID
            //     }
            // })
            // return city;
            //above was returning only the array with th count of updated/affected rows

            //but rather we want to have the updatead result

            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save();
            return city;
            //better way will be throw an error even if the primary key sent
            //does not exists and if it exists then do above
        } catch (error) {
            console.log("something went wrong at the repository layer");
            throw {error};
        }
    };
    
    async getCity(cityID) {
        // try {
        //     const city = await City.findByPk(cityID);
        //     return city;
        // } catch (error) {
        //     console.log("something went wrong at the repository layer");
        //     throw {error};
        // }

        const city = await City.findByPk(cityID);
        if(city === null){
            throw {Error}
        }
        return city;
    };

    async getAllData(){
        try {
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("something went wrong at the repository layer");
            throw {error};   
        }
    }
}

module.exports = CityRepository;