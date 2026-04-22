const express = require('express');
const router = express.Router();
const formacaoController = require('../controllers/formacaoController');

router.post('/', formacaoController.create);
router.get('/:pessoa_id', formacaoController.getByPessoa);
router.put('/:id', formacaoController.update);
router.delete('/:id', formacaoController.delete);

module.exports = router;