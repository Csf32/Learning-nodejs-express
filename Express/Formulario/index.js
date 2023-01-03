const Sequelize = require('sequelize')
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const sequelize = new Sequelize('test','root','12345', {
    host: "localhost",
    dialect: 'mysql'
})


app.get("/cad", (req, res) => {
    res.send("Servidor")
})

app.listen(8081, function() {
    console.log("Servidor rodando formulario")
})