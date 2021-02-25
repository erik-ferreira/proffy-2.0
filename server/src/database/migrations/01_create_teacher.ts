import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('teachers', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
    table.string('image').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('teachers')
}