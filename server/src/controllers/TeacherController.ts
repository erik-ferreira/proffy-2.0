import { Request, Response } from 'express'
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
    
    const user = await db('users').select('*').where('id', user_id)
    const { name, surname, email } = user[0]

    const trx = await db.transaction()
    
    try {
      const insertedTeachersIds = await trx('teachers').insert({
        user_id,
        name, 
        surname,
        email,
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
    const { name, surname, email, whatsapp, bio, cost, schedule } = request.body

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
      await db('teachers')
        .update({
          name,
          surname,
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