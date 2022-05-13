const conexao = require("./conexao");

class Tabelas {
    init(conexao) {
        console.log("As tabelas foram chamadas")

        this.conexao = conexao;
        this.criarAtendimentos();
        this.criarServico();
    }

    criarAtendimentos() {

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'


        //Espera uma query SQL para poder exercutar
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            } else {
                console.log("Tabela Atendimentos criada com sucesso !")
            }
        })
    }

    criarServico() {
        const sql2 = 'CREATE TABLE IF NOT EXISTS Servicos (id int NOT NULL AUTO_INCREMENT, nome varchar(20) NOT NULL, preco float(5,2), PRIMARY KEY(id))'

        this.conexao.query(sql2, erro => {
            if (erro) {
                console.log(erro);
            } else {
                console.log("Tabela Servicos criada com sucesso !")
            }
        })
    }
};



//Para usar em outros lugares
module.exports = new Tabelas;

