const restaurantModel = require('../models/etteremModel')
exports.createRestaurant = (req, res, next) => {
    restaurantModel.create(req.body)
    res.status(201)   
}
