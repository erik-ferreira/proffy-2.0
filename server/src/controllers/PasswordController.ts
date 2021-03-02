import { Request, Response } from 'express'
import crypto from 'crypto'
import bycript from 'bcrypt'
import db from '../database/connection'

export default class PasswordController {
  async update(request: Request, response: Response) {
    const { hashSentEmail, email, password } = request.body

    const user = await db('users').select('email', 'code').where('email', email)

    if(user.length !== 0) {
      if(user[0].code === hashSentEmail) {

        const saltRounds = 10;

        bycript.hash(password, saltRounds, async (err, hash) => {
          const code = crypto.randomBytes(6).toString('hex')
        
          const user = await db('users').update({
            password: hash,
            code
          }).where('email', email)
        
          return response.json(user)
        })

      } else {
        return response.status(400).send('Código incompatível!')
      }
    } else {
      return response.status(400).send('E-mail não está cadastrado na nossa plataforma!')
    }
  }
}