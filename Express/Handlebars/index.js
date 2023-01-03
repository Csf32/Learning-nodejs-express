const express = require('express')
const app = express()

const handlebars = require('express-handlebars')
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
    app.set('view engine', 'handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeconexao', 'root', 'Unitedred33.', {
    host: "localhost",
    dialect: "mysql"
})


app.get("/cad", (req, res) => {
    //render na pasta do handlebars
    res.render("formulario")
})

app.post("/form", (req, res) => {  
    res.send("Texto: " + req.body.titulo + "Conteudo: " + req.body.conteudo)
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


