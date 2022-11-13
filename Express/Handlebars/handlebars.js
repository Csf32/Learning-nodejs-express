const express = require('express')
const app = express()

const handlebars = require('express-handlebars')

    app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
    app.set('view engine', 'handlebars')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeconexao','root','Unitedred33.', {
    host: "localhost",
    dialect: "mysql"
})

    try {
    
        sequelize.authenticate()
        console.log("Conexão feita!")
        
    } catch (error) {
        console.error("Erro de conexão", error)    
    }

app.listen(8081, () => {
    console.log("Servidor rodando")
})


