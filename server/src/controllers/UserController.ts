import { Request, Response } from 'express'
import bycript from 'bcrypt'
import db from '../database/connection'

export default class UserController {
  async create(request: Request, response: Response) {
    const { name, surname, email, password } = request.body

    const saltRounds = 10;

    bycript.hash(password, saltRounds, async (err, hash) => {

      const emailsUsers = await db('users').select('email')
      
      for(let user of emailsUsers) {
        if(user.email === email) {
          return response.status(400).send('E-mail já está cadastrado!')
          break
        }
      }      
      const userId = await db('users').insert({
        name,
        surname, 
        email, 
        password: hash
      })

      return response.json(userId)  
    })
  }

  async show(request: Request, response: Response) {
    const { email, password } = request.body

    const user = await db('users').select('*').where('email', email)

    if(!user) { 
      return response.status(400).send('Você não possui cadastro na nossa plataforma!')
    }   

    bycript.compare(password, user[0].password, async (err, result) => {
      if(result) {
        // direcionar para tela home
      } else {
        // senha incorreta
      }
    })

    return response.send('Login efetuado com sucesso!')
  }
}