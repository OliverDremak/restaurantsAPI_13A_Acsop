const express = require('express');
const router = express.Router();
const Model = require('../models/etteremModel')
const restaurantCreate = require('../controllers/restaurant.controller')

router.post('/', restaurantCreate)
router.get('/', getAllRestaurants)
router.get('/:id', getRestaurant)
router.put('/:id', modifyRestaurant)
router.delete('/:id', deleteRestaurant)

module.exports = router;
