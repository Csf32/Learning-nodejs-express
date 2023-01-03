
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testenodejs', 'root', 'Unitedred33.', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports ={
    Sequelize,
    sequelize
}
