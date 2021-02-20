import express from 'express'
import UserController from './controllers/UserController'

const routes = express.Router()
const userController = new UserController()

routes.post('/users', userController.create)
routes.get('/users', userController.show)

export default routes