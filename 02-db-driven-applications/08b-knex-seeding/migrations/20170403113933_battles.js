
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('battles', (table) => {
      table.increments('battle_id').primary();
      table.string('location').notNullable();
      table.integer('monster_id');
      table.integer('hero_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('battles')
};
