
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testenodejs', 'root', 'null', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports ={
    Sequelize,
    sequelize
}
