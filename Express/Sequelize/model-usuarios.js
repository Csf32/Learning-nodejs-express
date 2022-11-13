const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeconexao','****', '****', {
    host: "localhost",
    dialect: "mysql"
})

const usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

usuario.create ({
    nome: "Vera",
    idade: 58,
    email: "veras@test.com"
})

//usuario.sync({ force:true })

try {
    
    sequelize.authenticate()
    console.log("Conexão feita!")
    
} catch (error) {
    console.error("Erro de conexão", error)    
}