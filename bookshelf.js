const env = process.env.NODE_ENV || 'dev'

const dbConfig = {
  client: 'mysql',
  connection: {
    host     : env === 'dev' ? '127.0.0.1' :process.env.MYSQL_HOST,
    user     : env === 'dev' ? 'root' : process.env.MYSQL_HOST,
    password : env === 'dev' ? '' : process.env.SECRETKEY,
    port     : env === 'dev' ? 3306: process.env.MYSQL_PORT,
    database : env === 'dev' ? 'yukishop' : 'app_' + process.env.APPNAME,
    charset  : 'utf8'
  }
}

const knex = require('knex')(dbConfig)

const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('registry')

module.exports = bookshelf