const { Router } = require('express');

const router = Router();
const consultasController = require('../controllers/consultas.controller');

router.post('/consultar', consultasController.consultar);

module.exports = router;