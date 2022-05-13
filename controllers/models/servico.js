const conexao = require('../infra/conexao');

class Servico {
    adiciona(servico) {

        conexao.query("INSERT INTO Servicos(id, nome, preco) VALUES('', '$nome', '$preco')", servico, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                //Retorna o que salvou e se salvou de fato
                console.log(resultados)
            }

        })
    }
}

module.exports = new Servico;