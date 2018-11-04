const express = require('express')
const bodyParser = require('body-parser')
const Promise = require('bluebird')
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')
const multer = require('multer')
const path = require('path')

const app = express()
const api = require('./api')
const bookshelf = require('./bookshelf')

app.use(cors())
app.use(morgan('common'))
app.use(compression())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 10000000 }))
// parse application/json
app.use(bodyParser.json({limit: '50mb'}))

app.use('/api', api) // api的入口

app.post('/upload', multer(require('./config/multer.config')).single('file'), (req, res) => {
  console.log(req.file.filename) // 上传文件所生成的名字，返回给客户端，将来要存储在数据库里
  res.send({
    message: 'success',
    filename: req.file.filename
  })
})

app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

app.listen(process.env.PORT || 5050, '0.0.0.0', function () {
  console.log('Listening on port 5050!')
})