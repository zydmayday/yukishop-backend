const bookshelf = require('../bookshelf')
const OrderProductDetail = require('./OrderProductDetail')

const Order = bookshelf.Model.extend({
  tableName: 'yukishop_order',
  customer: function () {
    return this.belongsTo('Customer', 'customer_id')
  },
  products: function () {
    return this.belongsToMany('Product', 'yukishop_product')
               .through(OrderProductDetail, 'order_id', 'product_id')
               .withPivot(['sold_price'])
  }
})

module.exports = bookshelf.model('Order', Order)