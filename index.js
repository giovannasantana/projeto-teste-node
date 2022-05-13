const customExpress = require('./config/customExpress')
const conexao = require('./controllers/infra/conexao');
const Tabelas = require('./controllers/infra/tabelas');

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Conectado com sucesso !")

        //Conectar ao banco e já criar as tabelas que precisamos
        Tabelas.init(conexao);

        //Conectar com a API apenas depois de termos nos conectado com sucesso
        //Pra subir o servidor só se o banco subir também
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
})



