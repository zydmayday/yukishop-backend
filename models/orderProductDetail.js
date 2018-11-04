const bookshelf = require('../bookshelf')

const OrderProductDetail = bookshelf.Model.extend({
  tableName: 'yukishop_order_product',
  order: () => {
    return this.belongsTo('Order', 'order_id')
  },
  product: () => {
    return this.belongsTo('Product', 'product_id')
  }
})

module.exports = bookshelf.model('OrderProductDetail', OrderProductDetail)