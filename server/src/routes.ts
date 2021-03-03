import express from 'express'
import ConnectionController from './controllers/ConnectionController'
import UserController from './controllers/UserController'
import TeacherController from './controllers/TeacherController'
import ClassesController from './controllers/ClassesController'
import PasswordController from './controllers/PasswordController'
import SendMailService from './services/SendMailService'

const routes = express.Router()
const userController = new UserController()
const connectionController = new ConnectionController()
const teacherController = new TeacherController()
const classesController = new ClassesController()
const passwordController = new PasswordController()
const sendMailService = new SendMailService()

routes.get('/users', userController.show)
routes.post('/users', userController.create)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

routes.post('/teachers', teacherController.create)
routes.put('/teachers', teacherController.update)

routes.get('/classes', classesController.index)
routes.delete('/classes/:id', classesController.delete)

routes.put('/password', passwordController.update)

routes.post('/sendMail', sendMailService.execute)

export default routes