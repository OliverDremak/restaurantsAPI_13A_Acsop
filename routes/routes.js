const express = require('express');
const router = express.Router();
const Model = require('../models/etteremModel')
const restaurantCreate = require('../controllers/restaurant.controller')

router.post('/', restaurantCreate)

module.exports = router;
