const express = require('express')
const router = express.Router()

const customerRouter = require('./customerRouter')
const orderRouter = require('./orderRouter')
const productRouter = require('./productRouter')

router.get('/', function (req, res) {
  res.json({
    data: {
      fake: 'foo',
      mock: 'bar'
    }
  })
})

router.use('/customers', customerRouter)
router.use('/orders', orderRouter)
router.use('/products', productRouter)

module.exports = router