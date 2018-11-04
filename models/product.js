const bookshelf = require('../bookshelf')

const Product = bookshelf.Model.extend({
  tableName: 'yukishop_product',
  orders: function () {
    return this.belongsToMany('Order', 'yukishop_order_product', 'product_id', 'order_id')
  }
})

module.exports = bookshelf.model('Product', Product)