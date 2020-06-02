import express from 'express'

import pointsController from './controllers/pointsController'
import itemsController from './controllers/itemsController'

const routes = express.Router()
const PointsController = new pointsController()
const ItemsController = new itemsController()

routes.get("/items", ItemsController.index)

routes.get('/points/:id', PointsController.show)
routes.get('/points', PointsController.index)
routes.post('/points', PointsController.create)

export default routes