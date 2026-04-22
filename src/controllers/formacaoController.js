const pool = require('../config/db');

const formacaoController = {
  create: async (req, res) => {
    try {
      const { instituicao, curso, status, pessoa_id } = req.body;
      const result = await pool.query(
        'INSERT INTO formacoes (instituicao, curso, status, pessoa_id) VALUES ($1, $2, $3, $4) RETURNING *',
        [instituicao, curso, status, pessoa_id]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getByPessoa: async (req, res) => {
    try {
      const { pessoa_id } = req.params;
      const result = await pool.query('SELECT * FROM formacoes WHERE pessoa_id = $1', [pessoa_id]);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { instituicao, curso, status } = req.body;
      const result = await pool.query(
        'UPDATE formacoes SET instituicao=$1, curso=$2, status=$3 WHERE id=$4 RETURNING *',
        [instituicao, curso, status, id]
      );
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM formacoes WHERE id=$1', [id]);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = formacaoController;