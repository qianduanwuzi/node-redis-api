// 用户
const Sequelize = require('sequelize')
const sequelize = require('../../mysql_server.js')

const UserModel = sequelize.define('u_user', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(10),
  phone: Sequelize.STRING(20),
  pw: Sequelize.STRING(20)
}, {timestamps: false})

module.exports = UserModel
