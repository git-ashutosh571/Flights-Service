const {StatusCodes} = require('http-status-codes');

const AppError = require('../Utils/errors/app-error');
const {CityRepository} = require('../repositories');
const city = require('../models/city');

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name =='SequelizeValidationError' || 'SequelizeUniqueConstraintError'){
            let explanation =[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }


}

async function destroyCity(id){
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode = StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of all cities',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }

}

async function updateCity(id){
    try {
        const response = await cityRepository.update(id);
        return response;
    } catch (error) {
        if (error.statusCode = StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to update is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of all cities',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }

}


module.exports ={
    createCity,
    destroyCity,
    updateCity

}