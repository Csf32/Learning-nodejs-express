
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeconexao', 'root', 'Unitedred33.', {
    hots: "localhost",
    dialect: "mysql"
})


const postagem = sequelize.define('postagens',{ 

    titulo: {
        
        type: Sequelize.STRING 
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

postagem.sync({ force:true })

try {
    sequelize.authenticate()
    console.log("Conexão estabelecida com sucesso!")
} catch (error) {
    console.error("Conexão falhou", error)
}
