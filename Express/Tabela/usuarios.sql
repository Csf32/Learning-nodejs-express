CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
INSERT INTO usuarios(nome, email, idade) VALUES (
    "Caique Souza", "emai.teste@hotmail.com", 26
   
);

INSERT INTO usuarios(nome, email, idade) VALUES 

    ("Eliana Correia","email.test2@hotmail.com", 27),
    ("Vera Lúcia", "email2.test@hotmail.com", 57),
    ("Antonio Fonseca", "email3.teste@hotmail.com", 60
);

#Listar o usuario com a idade 27 por exemplo

SELECT * FROM usuarios WHERE idade = 27;

#Listar idades maiores que 18

SELECT * FROM usuarios WHERE idade >= 18;

#Deletar um registro SEMPRE COM WHERE
 #Precisa colocar o endereço completo

DELETE FROM usuarios WHERE nome = "Caique Souza";

#Atualização de dados dizendo qual dado quer atualizar SEMPRE COM WHERE

    #Mudando o nome de um usuario
UPDATE usuarios SET nome = "Nome Novo" WHERE nome = "Antonio Fonseca";