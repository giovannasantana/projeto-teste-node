const mysql = require('mysql2'); //mais estável e tende a gerar menos erros

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agendapetshop'
});

module.exports = conexao