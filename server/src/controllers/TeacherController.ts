import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import db from '../database/connection'

import convertHoursToMinutes from '../utils/convertHoursToMinutes'

interface ScheduleItemProps {
  schedule_id?: string;
  week_day: number;
  from: string;
  to: string;
}

export default class TeacherController {
  async create(request: Request, response: Response) {
    const { whatsapp, bio, subject, cost, schedule } = request.body
    const { user_id } = request.headers

    const trx = await db.transaction()
    
    try {
      const insertedTeachersIds = await trx('teachers').insert({
        user_id,
        whatsapp,
        bio,
        image: 'image.jpg',
      })
  
      const teacher_id = insertedTeachersIds[0]
  
      const insertedClassesIds = await trx('classes').insert({
        teacher_id,
        subject,
        cost
      })
  
      const class_id = insertedClassesIds[0]
  
      const classSchedule = schedule.map((scheduleItem: ScheduleItemProps) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to)
        }
      })
      
      await trx('class_schedule').insert(classSchedule)
  
      await trx.commit()
      
      return response.status(201).send()
    } catch(err) {
      await trx.rollback()

      return response.status(400).json({
        erro: 'Unexpected error occurred while creating new class'
      })
    }
  }

  async update(request: Request, response: Response) {
    const { teacher_id, class_id, schedule_id } = request.headers
    const { name, surname, currentPassword, newPassword, email, whatsapp, bio, cost, schedule } = request.body

    const arrayScheduleIds = String(schedule_id).split(',').map(id => id.trim())

    const classSchedule = schedule.map((scheduleItem: ScheduleItemProps, index: number) => {
      return {
        schedule_id: arrayScheduleIds[index],
        week_day: scheduleItem.week_day,
        from: convertHoursToMinutes(scheduleItem.from),
        to: convertHoursToMinutes(scheduleItem.to)
      }
    })

    try {
      const user = await db('teachers')
      .join('users', 'teachers.user_id', '=', 'users.id')
      .select('users.password', 'users.id')
      .where('teachers.user_id', '=', teacher_id as string)

      const password = user[0].password
      bcrypt.compare(currentPassword, password, (err, result) => {
        if(result) {
          const saltRounds = 10
          bcrypt.hash(newPassword, saltRounds, async (err, hash) => {
            await db('users')
              .update({ 
                password: hash,
                name,
                surname,
              })
              .where('id', user[0].id)
          })
        }
      })

      await db('teachers')
        .update({
          email, 
          whatsapp,
          bio
        })
        .where('id', teacher_id)
  
      await db('classes')
        .update({
          cost
        })
        .where('id', class_id)
  
      classSchedule.map((classScheduleItem: ScheduleItemProps) => {
        async function updateSchedule() {
          await db('class_schedule')
            .update({
              week_day: classScheduleItem.week_day,
              from: classScheduleItem.from,
              to: classScheduleItem.to,
            })
            .where('id', classScheduleItem.schedule_id)
        }
  
        updateSchedule()
      })

      return response.status(201).send()
    } catch(err) {
      return response.status(400).json({
        erro: 'Unexpected error occured while updated your data'
      })
    }

  }
}