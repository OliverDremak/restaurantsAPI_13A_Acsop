const RestaurantModel = require('../models/etteremModel')

exports.createRestaurant = async (req, res, next) => {
    try {
      const restaurant = await RestaurantModel.create(req.body);
      res.status(201).json(restaurant);
    } catch (error) {
      next(error);
    }
  };
  
exports.getAllRestaurants = async (req, res, next) => {
    try {
      const restaurants = await RestaurantModel.find();
      res.status(200).json(restaurants);
    } catch (error) {
      next(error);
    }
  };
  
exports.getRestaurantById = async (req, res, next) => {
    try {
      const restaurant = await RestaurantModel.findById(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      res.status(200).json(restaurant);
    } catch (error) {
      next(error);
    }
  };
exports.deleteRestaurant = async (req, res, next) => {
    try {
      const restaurant = await RestaurantModel.findByIdAndDelete(req.params.id);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      res.status(200).json(restaurant);
    } catch (error) {
      next(error);
    }
  }

