const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get('/', (req, res) => {
  Product.forge().orderBy('create_time', 'DESC').fetchAll({
    withRelated: ['orders']
  }).then(products => {
    res.json(products)
  })
})

router.post('/add', (req, res) => {
  const newProduct = req.body
  console.log(newProduct)
  const temp = {
    cn_name: newProduct.cnName,
    jp_name: newProduct.jpName,
    recommend_cn_price: newProduct.recommendCnPrice,
    recommend_jp_price: newProduct.recommendJpPrice,
    maker: newProduct.maker,
    spec: newProduct.spec,
    remark: newProduct.remark,
    image: newProduct.productImageName
  }
  console.log(temp)
  Product.forge(temp).save()
    .then(newProduct => {
      res.json(newProduct)
    })
})

router.put('/update', (req, res) => {
  const { id, cnName, jpName, recommendCnPrice, recommendJpPrice, maker, spec, remark, productImageName } = req.body
  Product.forge({id: id})
    .save({
      cn_name: cnName,
      jp_name: jpName,
      recommend_cn_price: recommendCnPrice,
      recommend_jp_price: recommendJpPrice,
      image: productImageName,
      maker,
      spec, 
      remark
    }, { patch: true })
    .then(updatedProduct => {
      updatedProduct.refresh({
        withRelated: ['orders']
      })
      .then(updatedProduct => {
        console.log(updatedProduct)
        res.json(updatedProduct)
      })
    })
})

module.exports = router