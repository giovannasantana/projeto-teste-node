const Servico = require('./models/servico');

module.exports = app => {
    app.get('/servicos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    app.post('/servicos', (req, res) => {
        const servico = req.body
        Servico.adiciona(servico);
    })
}