const { bookshelf } = require('../bookshelf.js')

let Battle = bookshelf.Model.extend({
  tableName: 'battles',
  monster: function() {
    return this.belongsTo('Monster', 'monster_id')
  }
}, {
  byLocation: function (location) {
    return this.forge().query({where:{ location: location }}).fetch()
  }
})

module.exports = bookshelf.model('Battle', Battle)
