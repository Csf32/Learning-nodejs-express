const express2 = require("express")

const app2 = express2()

app2.get('/', (req, res) => {
    res.send("Bem-vindo user")
})

app2.get('/produtos', (req, res) => {
    res.send("Bem vindo também")
})

app2.get('/ola/:nome', (req, res) => {
    res.send(req.params)
})

app2.get('/ola2/:nome2/:cargo', (req, res) => {
  
    res.send("<h1>Bem vindo " + req.params.nome2 + "</h1>" + 
    "<h2>Seu cargo é: " + req.params.cargo + "</h2>")
})



app2.listen(8081, function() {
    console.log("Servidor rodando")
})