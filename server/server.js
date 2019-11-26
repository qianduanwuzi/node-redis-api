var express = require('express')
// var router = express.Router()
var app = express()
// var morgan = require('morgan')
var bodyParser = require('body-parser')
// parse application/json
app.use(bodyParser.json())
var user = require('./db/api/user.js')
// post方式提交数据解析
app.use(bodyParser.urlencoded({ extended: true }))

// router.get('/test', function (req, res) {
//   res.send('Birds home page')
// })
app.use('/user', user)

// router.get('/user/1', function (req, res) {
//   res.send('Birds home page')
// })
module.exports = app
