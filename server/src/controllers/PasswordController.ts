import { Request, Response } from 'express'
import crypto from 'crypto'
import db from '../database/connection'

export default class PasswordController {
  async update(request: Request, response: Response) {
    const { hashEmail, email, password } = request.body

    const users = await db('users').select('*')
     
    for(let user of users) {
      if(user.email !== email) {
        return response.status(400).send('E-mail não está cadastrado na nossa plataforma!')
      }
      break
    }

    const code = crypto.randomBytes(6).toString('hex')

    const user = await db('users').where('email', email)

    return response.json()
  }
}