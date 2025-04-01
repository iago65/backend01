const express = require('express');
let app = express();

const port = 3000;
const index = require('./routes/indexRoutes.js'); 
const pessoa = require('./routes/pessoaRoutes.js');
const carros = require('./routes/carrosRoutes.js');

app.use('/', index);
app.use('/pessoa', pessoa);
app.use('/carros', carros);

// const pessoa = require('./pessoa.json');

// Bloco de chamada das rotas do projeto

// app.get('/', (req, res) => {
//     console.log('Rota Raiz Encontrada!');
//     res.send('<h3>Rota Raiz Encontrada!</h3>');
// })

// app.get('/pessoa', (req, res) => {
//     console.log('Lendo dados de pessoa!');
//     return res.json(pessoa);
// })

// app.get('/pessoa/:cod', (req, res) => {
//     let codigo = req.params.cod
//     console.log('Lendo \n ', pessoa[codigo]);
//     return res.json(pessoa[codigo]);
// })

// app.get('/sobre', (req, res) => {
//     console.log('Rota Sobre Nossa Empresa Encontrada!');
//     res.send('<h3>Conheça nossos serviços de TI</h3>');
// })

// app.get('/contato', (req, res) => {
//     console.log('Rota Contatos Encontrada!');
//     res.render('contato.ejs', {
//         title: 'Contato'
//     })
// })

// app.get('/produtos', (req, res) => {
//     console.log('Rota Produtos Encontrada!');
//     res.render('produtos.ejs', {
//         title: 'Produtos'
//     })
// })

// app.get('/equipe', (req, res) => {
//     console.log('Rota Equipe Encontrada!');
//     res.render('equipe.ejs', {
//         title: 'Equipe'
//     })
// })

// app.get('/filiais', (req, res) => {
//     console.log('Rota Filiais Encontrada!');
//     res.render('filiais.ejs', {
//         title: 'Filiais'
//     })
// })

// app.get('/vendas', (req, res) => {
//     console.log('Rota Vendas Encontrada!');
//     res.render('vendas.ejs', {
//         title: 'Vendas'
//     })
// })


// Instanciar o servidor
try {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
} catch(erro) {
    console.log('Ocorreu um erro ao inicializar o servidor');
}
