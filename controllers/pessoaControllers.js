module.exports = {
  getAll,
  getId
};

const pessoa = require('../pessoa.json');
console.log(pessoa);

function getAll(req, res) {
  console.log('Lendo dados de pessoa!');
  return res.json(pessoa);
}

function getId(req, res) {
  console.log('Lendo dados de pessoa!');
  return res.json(pessoa);
}

