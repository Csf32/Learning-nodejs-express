const express = require('express')
const app = express()
const bancoImportado = require('./models/Testenodejs')

const handlebars = require('express-handlebars')
    
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.set(bodyParser.json())


app.get('/', (req, res) => {
    
     bancoImportado.all().then((bancoimportado) => {
        res.render('home', { bancoimportado })
     })

})

app.get('/rota', (req, res) => {
    res.render("formularios")
})

app.post('/envio', (req, res) => {
    res.send("Titulo: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
    
})

app.post('/receber', (req, res) => {

    bancoImportado.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
        
    }).then(() => {
        res.redirect('/')
    })
      .catch((error) => {
       res.send("Houve um problema", error)
    }) 
})

app.listen(8081, () => {
    console.log("Servidor rodando")
})
