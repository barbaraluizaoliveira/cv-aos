const pool = require('../config/db');

const pessoaController = {
  create: async (req, res) => {
    try {
      const { nome, email, telefone, linkedin } = req.body;
      const result = await pool.query(
        'INSERT INTO pessoas (nome, email, telefone, linkedin) VALUES ($1, $2, $3, $4) RETURNING *',
        [nome, email, telefone, linkedin]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM pessoas');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, telefone, linkedin } = req.body;
      const result = await pool.query(
        'UPDATE pessoas SET nome=$1, email=$2, telefone=$3, linkedin=$4 WHERE id=$5 RETURNING *',
        [nome, email, telefone, linkedin, id]
      );
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM pessoas WHERE id=$1', [id]);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = pessoaController;