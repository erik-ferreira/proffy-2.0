import { Request, Response } from 'express'
import db from '../database/connection'

export default class ClassesController {
  async delete(request: Request, response: Response) {
    const { id } = request.params
  
    await db('class_schedule').delete().where('id', id)
  
    return response.status(201).send('Deleted time with success')
  }
}
