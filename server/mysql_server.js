const Sequelize = require('sequelize')

// 建立连接
const sequelize = new Sequelize('mydb', 'root', 'root', {
  host: 'localhost', // ww.bugnotfound.cn
  port: 3306,
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  timezone: '+08:00' // 东八时区
})

// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
// const TestModel = sequelize.define('test', {
//   id: {
//     type: Sequelize.INTEGER(11),
//     primaryKey: true, // 主键
//     autoIncrement: true // 自动递增
//   },
//   username: Sequelize.STRING(100),
//   password: Sequelize.STRING(100),
//   createdAt: Sequelize.BIGINT,
//   updatedAt: Sequelize.BIGINT
// }, {
//   timestamps: false
// })

// const now = Date.now()
// const user = TestModel.create({
//   username: '小张',
//   password: 'root',
//   createAt: now,
//   updateAt: now
// })
// console.log('创建：' + JSON.stringify(user))
// TestModel.findAll().then(res => console.log('123', res))
