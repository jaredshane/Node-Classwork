
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_name: 'Frankie'},
        {monster_name: 'Joel'},
        {monster_name: 'Cookie'},
        {monster_name: 'Ol Giggles'}
      ]);
    });
};
