const conexao = require('../infra/conexao');
const moment = require('moment')

class Atendimento {
    adiciona(atendimento, res) {
        const sql = 'INSERT INTO Atendimentos SET ?';
        // o ? = o que for colocado neste campo será inserido na tabela

        //convertendo o formato da data para ser aceito no mysql
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento,dataCriacao, data}


        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                res.json(erro)
            } else {
                //Retorna o que salvou, se salvou
                res.json(resultados)
            }
        })
    }
}

module.exports = new Atendimento;