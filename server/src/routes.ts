import express from 'express'
import ConnectionController from './controllers/ConnectionController'
import UserController from './controllers/UserController'
import TeacherController from './controllers/TeacherController'
import ClassesController from './controllers/ClassesController'

const routes = express.Router()
const userController = new UserController()
const connectionController = new ConnectionController()
const teacherController = new TeacherController()
const classesController = new ClassesController()

routes.get('/users', userController.show)
routes.post('/users', userController.create)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

routes.post('/teachers', teacherController.create)
routes.put('/teachers', teacherController.update)

routes.get('/classes', classesController.index)
routes.delete('/classes/:id', classesController.delete)

export default routes