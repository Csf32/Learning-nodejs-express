const express3 = require("express")

const app3 = express3()

app3.get('/sobre', (req, res) => {
  
    res.sendFile(__dirname + "/index.html")
})

app3.listen(8081, function (){
    console.log("Servidor rodando!")
})