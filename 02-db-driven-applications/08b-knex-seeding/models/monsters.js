const { bookshelf } = require('../bookshelf')

require('./battles')
const Monster = bookshelf.Model.extend({
  tableName: 'monsters',
  idAttribute: 'monster_id',
  battles: function() {
    return this.hasMany('Battle', 'monster_id')
  }
});

module.exports = bookshelf.model('Monster', Monster)
