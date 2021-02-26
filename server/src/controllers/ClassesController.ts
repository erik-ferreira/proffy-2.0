import { Request, Response } from 'express'
import db from '../database/connection'
import convertHoursToMinutes from '../utils/convertHoursToMinutes'

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query
    const week_day = filters.week_day as string
    const subject = filters.subject as string
    const time = filters.time as string

    if(!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHoursToMinutes(time)

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('subject', '=', subject)
      .join('teachers', 'classes.teacher_id', '=', 'teachers.id')
      .select(['teachers.*', 'classes.*'])

    return response.json(classes)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params
  
    await db('class_schedule').delete().where('id', id)
  
    return response.status(201).send('Deleted time with success')
  }
}
