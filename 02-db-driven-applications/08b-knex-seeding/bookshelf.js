//The knex module is itself a function which takes a configuration
//object for Knex, accepting a few parameters. The client parameters
//is required and determines which client adapter will be used with the library

const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')
const knex = require('knex')(config[env])
const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('registry')

module.exports = { bookshelf }
