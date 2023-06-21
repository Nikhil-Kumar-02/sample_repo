const { CityService } = require('../services/index');
const cityservice = new CityService();

const create = async (req,res)=>{
    try {
        const city = await cityservice.createCity(req.body);
        return res.status(201).json({
            data : city,
            sucess : true,
            message : "sucessfully created a city",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            message : "Not able to create a city",
            err : error
        })
    }
}

// delete city/:id
const destroy = async (req,res)=>{
    try {
        const response = await cityservice.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            sucess : true,
            message : "city deleted sucessfully",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            message : "Not able to delete the city",
            err : error
        })
    }
}

//get city/:id
const get = async (req,res)=>{
    try {
        const response = await cityservice.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            sucess : true,
            message : "Sucessfully fetched the city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            message : "Not able to fetch the city",
            err : error
        })
    }
};

//patch city/:id
const update = async (req,res) => {
    try {
        const response = await cityservice.updateCity( req.body , req.params.id);
        return res.status(200).json({
            data : response,
            sucess : true,
            message : "Sucessfully updated the city",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            message : "Not able to update the city",
            err : error
        });
    }
}

//get city/
const getAll = async (req,res) => {
    try {
        const wholeData = await cityservice.getAllData();
        return  res.status(200).json({
            data : wholeData,
            sucess : true,
            message : "this the whole dataset we currently had",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            sucess : false,
            message : "Due to some error we are not able to fetch you data",
            err : error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}