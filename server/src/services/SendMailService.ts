import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import db from '../database/connection'
import nodemailer from 'nodemailer'

export default class SendMailService {
  async execute(request: Request, response: Response){
    const { email } = request.body

    const user = await db('users').where('email', email)
    console.log(user)

    return response.send()
  }
}