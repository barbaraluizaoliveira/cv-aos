const express = require('express');
const router = express.Router();

const pessoaRoutes = require('./pessoaRoutes');
const experienciaRoutes = require('./experienciaRoutes');
const formacaoRoutes = require('./formacaoRoutes');

router.use('/pessoas', pessoaRoutes);
router.use('/experiencias', experienciaRoutes);
router.use('/formacoes', formacaoRoutes);

module.exports = router;