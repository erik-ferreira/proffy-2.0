import { Request, Response } from 'express'
import crypto from 'crypto'
import db from '../database/connection'
import nodemailer from 'nodemailer'
import path from 'path'
import handlebars from 'handlebars'
import fs from 'fs'

export default class SendMailService {
  async execute(request: Request, response: Response){
    const { email } = request.body

    const user = await db('users').select('code', 'name').where('email', email)

    if(user.length === 1) {
      const account = await nodemailer.createTestAccount()
      
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      })
  
      const npsPath = path.resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs')
      const templateFileContent = fs.readFileSync(npsPath).toString('utf8')

      const mailTemplateParse = handlebars.compile(templateFileContent)
      const { name, code } = user[0]
      const html = mailTemplateParse({
        name,
        link: 'http://localhost:3000/redefine-password',
        code
      })

      const info = await transporter.sendMail({
        to: email,
        from: 'NPS <noreplay@nps.com.br>',
        subject: "Redefinição de senha",
        html
      })

      const linkEmail = nodemailer.getTestMessageUrl(info)

      const newCode = crypto.randomBytes(6).toString('hex')
      await db('users').update({ code: newCode }).where('email', email)
      console.log(linkEmail)
      return response.json({ link: linkEmail })
    } else {
      return response.status(400).send('E-mail is not register!')
    }
  }
}