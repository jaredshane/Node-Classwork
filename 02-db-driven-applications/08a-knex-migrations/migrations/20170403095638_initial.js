exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters', function(table){
      table.increments('monster_id').primary();
      table.string('monster_name').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monsters')
};
