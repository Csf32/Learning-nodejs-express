const express = require("express")

const app = express()

app.get("/", function(req, res) { 
    res.send("Ola, seja ben-vindo")
})

app.get("/sobre", function(req, res) {
    res.send("Minha página sobre")
})

app.get("/produtos", function (req, res) {
    res.send("Produtos")
})

app.listen(8081, function() {
    console.log("Servidor rodando na url.. porta 80181")
})