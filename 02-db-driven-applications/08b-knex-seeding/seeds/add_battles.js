
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {location: 'Winterfell', monster_id: 13, hero_id: 5},
        {location: 'Mordor', monster_id: 14, hero_id: 6},
        {location: 'Hoth', monster_id: 16, hero_id: 8}
      ]);
    });
};
