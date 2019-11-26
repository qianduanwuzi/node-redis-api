const UserModel = require('../models/user.js')
var express = require('express')
var router = express.Router()

// 创建用户
router.post('/register', function (req, res) {
  // console.log('7', req.body)
  UserModel.findAll({
    where: {
      phone: req.body.phone
    }
  }).then(result => {
    if (!result.length) {
      UserModel.create({
        name: req.body.name,
        phone: req.body.phone,
        pw: req.body.pw
      })
      res.json({code: 200, msg: '注册成功'})
      // res.status()
    } else {
      res.json({code: 200, msg: 'phone重复了'})
    }
  })
})

module.exports = router
