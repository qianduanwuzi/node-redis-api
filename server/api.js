var redisConfig = require('./redis_config')
var express = require('express')
var router = express.Router()
const {promisify} = require('util')
var redis = require('redis')
// 连接数据库
var client = redis.createClient(redisConfig.redis.port, redisConfig.redis.host, {auth_pass: redisConfig.redis.pwd })

const getAsync = promisify(client.get).bind(client)
// 针对type为hash类型的get
const hGetAsync = promisify(client.hgetall).bind(client)
client.on('ready', function (res) {
  console.log('ready', res || '')
})
// 错误事件监听
client.on('error', function (err) {
  console.log('error --------> ' + err)
})

router.get('/test', function (req, res) {
  res.send('Birds home page')
})

router.get('/age', function (req, res) {
  // nature
  // client.get('age', (err, c_res) => {
  //     console.log('123', c_res)
  // })
  getAsync('age').then(c_res => {
    res.send(c_res)
  })
})

router.get('/hashmap', function (req, res) {
  // nature
  // client.get('age', (err, c_res) => {
  //     console.log('123', c_res)
  // })
  hGetAsync('hashmap').then(c_res => {
    res.send(c_res)
  })
})

module.exports = router
