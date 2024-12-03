const RestaurantController = require('../../controllers/restaurant.controller')
const restaurantModel = require('../../models/etteremModel')
const httpMocks = require('node-mocks-http')
const newRestaurant = require('../mock-data/new-restaurant.json')

restaurantModel.create = jest.fn()

let req, res, next

beforeEach(()=>{
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
})
describe('RestaurantController createRestaurant tesztek', ()=>{
    it('kellene lennie egy createRestaurant fgv-nek', ()=>{
        expect(typeof RestaurantController.createRestaurant).toBe('function')
    })
    it('megkellene hívni a Model create fgv-ét', ()=>{
        req.body = newRestaurant
        RestaurantController.createRestaurant(req, res, next)
        expect(restaurantModel.create).toHaveBeenCalled()
    })
    it('201 koddal kellene visszatérnie', ()=>{
        req.body = newRestaurant
        RestaurantController.createRestaurant(req, res, next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })
})