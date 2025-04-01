module.exports = {
    index,
    sobre,
    contato,
    equipe,
    filiais,
    produtos,
    vendas,
    notFound
}

function notFound(req, res) {
    console.log('Página não encontrada - 404');
    res.send('<h1>404 Not Found</h1>');
}

function index(req, res) {
    console.log('Rota Raiz Encontrada!');
    res.send('<h3>Rota Raiz Encontrada!</h3>');
}


function sobre(req, res) {
    console.log('Rota Sobre Nossa Empresa Encontrada!');
    res.send('<h3>Conheça nossos serviços de TI</h3>');
}

function contato(req, res) {
    console.log('Rota Contatos Encontrada!');
    res.render('contato.ejs', {
        title: 'Contato'
    })
}

function equipe(req, res) {
    console.log('Rota Equipe Encontrada!');
    res.render('equipe.ejs', {
        title: 'Equipe'
    })
}

function filiais(req, res) {
    console.log('Rota Filiais Encontrada!');
    res.render('filiais.ejs', {
        title: 'Filiais'
    })
}

function produtos(req, res) {
    console.log('Rota Produtos Encontrada!');
    res.render('produtos.ejs', {
        title: 'Produtos'
    })
}

function vendas(req, res) {
    console.log('Rota Vendas Encontrada!');
    res.render('vendas.ejs', {
        title: 'Vendas'
    })
}

