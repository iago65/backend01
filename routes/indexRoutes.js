const express = require('express');
const router = express.Router();
const controllersIndex = require('../controllers/indexControllers.js');

router.get('/', controllersIndex.index);
router.get('/sobre', controllersIndex.sobre);
router.get('/contato', controllersIndex.contato);
router.get('*', controllersIndex.notFound)


module.exports = router;
