const express = require('express');

const router = express.Router();

const controllersCarros = require('../controllers/carrosControllers.js');

router.get('/carros', controllersCarros.getAll);
router.get('/carros/:cod', controllersCarros.getId);

module.exports = router;
