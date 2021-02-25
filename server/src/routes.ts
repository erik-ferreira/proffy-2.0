import express from 'express'
import ConnectionController from './controllers/ConnectionController'
import UserController from './controllers/UserController'
import TeacherController from './controllers/TeacherController'

const routes = express.Router()
const userController = new UserController()
const connectionController = new ConnectionController()
const teacherController = new TeacherController()

routes.get('/users', userController.show)
routes.post('/users', userController.create)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

routes.post('/teachers/classes', teacherController.create)
routes.put('/teachers', teacherController.update)

export default routes