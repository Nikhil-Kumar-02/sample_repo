// const { AirportRepository } = require('../repository/index');

class CrudService{

    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in the crud service layer");
            throw error;
        }
    }

    
    async delete(id){
        try {
            const result = await this.repository.delete(id);
            return result;
        } catch (error) {
            console.log("something went wrong in the crud service layer");
            throw error;
        }
    }

    
    async update(id , data){
        try {
            const result = await this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("something went wrong in the crud service layer");
            throw error;
        }
    }

    
    async get(id){
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log("something went wrong in the crud service layer");
            throw error;
        }
    }

    
    async getAll(){
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("something went wrong in the crud service layer");
            throw error;
        }
    }


}

module.exports = CrudService;