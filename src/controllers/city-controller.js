const { StatusCode, StatusCodes } = require('http-status-codes');
const {CityService} = require('../services');
const { response } = require('express');
const { error } = require('winston');

const {SuccessResponse,ErrorResponse} = require('../Utils/common');


/**
 * POST: /cities/
 * req-body {name:'London'}
 */

async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);


    }

}


/**
 * 
 * DELETE : /cities/:id
 * req-body {}
 */

async function destroyCity(req,res){
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
        
    }
}

/**
 * 
 * PATCH : /cities/:id
 * req-body {}
 */

async function updateCity(req,res){
    try {
        const city = await CityService.updateCity(req.params.id);
        SuccessResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
        
    }
}

module.exports = {
    createCity,
    updateCity,
    destroyCity

}