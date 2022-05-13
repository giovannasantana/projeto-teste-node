const Atendimento = require('./models/atendimento');

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body);
        //para adicionar ao banco
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
        res.send('Você está na rota de atendimentos e está realizando um POST');
    });
};
