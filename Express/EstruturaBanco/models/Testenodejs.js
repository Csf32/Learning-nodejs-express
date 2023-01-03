
const banco = require('./banco')
const testenodeJS = banco.sequelize.define('tabelanodejs', {
    titulo: {
        type: banco.Sequelize.STRING
    },
    conteudo: {
        type: banco.Sequelize.TEXT
    }
})

module.exports = testenodeJS