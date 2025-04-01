const carros = require('../carros.json'); // Importa os carros

function getAll(req, res) {
  return res.json(carros);
}

function getId(req, res) {
  return res.json(carros);
}

module.exports = { getAll, getId };
