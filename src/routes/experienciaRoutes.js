const express = require('express');
const router = express.Router();
const experienciaController = require('../controllers/experienciaController');

router.post('/', experienciaController.create);
router.get('/:pessoa_id', experienciaController.getByPessoa);

module.exports = router;