const { bookshelf } = require('./bookshelf.js')

const Battle = require('./models/battles')
const Monster = require('./models/monsters')

// const monster = new Monster()
// monster.set('monster_name', 'Godzilla')
// // console.log('monster', monster)
//
// monster.save().then(function(m) {
//   console.log('monster saved:', m.get('monster_name'))
// })
//
// Battle.byLocation('Winterfell').then(function(battle) {
//   console.log('Got battle', battle.get('monster_id'), battle.get('hero_id'))
// })

// Monster.forge({monster_name: 'Ol Giggles'}).fetch({withRelated: ['battles']})
//   .then(function(monster) {
//     console.log('Got Monster:', monster.get('monster_name'), monster.get('monster_id'))
//     console.log('Got battles:', monster.related('battles').toJSON())
//   })


let Monsters = bookshelf.Collection.extend({
  model: Monster
})

Monsters.forge().fetch().then((monsters) => {
  console.log('monsters', monsters.toJSON())
})
