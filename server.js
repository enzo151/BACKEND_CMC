//importar o modulo do express
const express = require('express');
const sequelize = require('./config/sequelize');
const router = require('./routes/router');
require('dotenv').config();

//testar a conexao com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.');

        //listar todas as tabelas do banco de dados
        return sequelize.query('SHOW TABLES');
    })
    .then(([result, metadata]) => {
        console.log('Tabelas no banco de dados:');
        console.log(result);

        //inicie o servidor
        /*app.listen(3000, () => {
            console.log('Servidor Express iniciado na porta 3000');
        }); */
    })
    .catch(err => {
        console.error('Falha ao conectar ao banco de dados:', err);
    });

//criar uma instancia do express
const app = express();

//definir o middleware para aceitar dados no formato JSON
app.use(express.json());
app.use(router);

//app.use(cookie-parser)

//definir a porta em que o servidor ira ouvir
const PORT = process.env.PORT || 3000;

//iniciar o servidor e ouvir a porta especificada
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado na porta ${PORT}`);
});