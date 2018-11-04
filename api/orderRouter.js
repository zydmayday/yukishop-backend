const express = require('express')
const router = express.Router()
const Order = require('../models/Order')


router.get('/', (req, res) => {
  Order.fetchAll({
    withRelated: ['customer', 'products']
  }).then(orders => {
    res.json(orders)
  })
})

module.exports = router