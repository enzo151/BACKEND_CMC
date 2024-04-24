//models/usuarios.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Usuario = sequelize.define('Usuarios', {
    //define as informações da tabela colunas

    idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true, //define essa coluna como a chave primaria
        autoIcrement: true //indica que é uma chave primaria autoincrementavel
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    cpf: Sequelize.STRING,
    senha: Sequelize.STRING,
    celular: Sequelize.STRING,
    cep: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    estado: Sequelize.STRING,
    imagem: Sequelize.STRING,
    Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER
},
    {
        //precisa disso pq nao tem as colunas createdAt e updateAt no bd
        timestamps: false //adiciona colunas createdAt e updateAt automaticamente
    });

module.exporst = Usuario;