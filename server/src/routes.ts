import express from 'express'
import ConnectionController from './controllers/ConnectionController'
import UserController from './controllers/UserController'

const routes = express.Router()
const userController = new UserController()
const connectionController = new ConnectionController()

routes.get('/users', userController.show)
routes.post('/users', userController.create)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

export default routes