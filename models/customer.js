const bookshelf = require('../bookshelf')

const Customer = bookshelf.Model.extend({
	tableName: 'yukishop_customer',
  orders: function () {
    return this.hasMany('Order', 'customer_id')
  }
})

module.exports = bookshelf.model('Customer', Customer)