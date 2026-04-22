const pool = require('../config/db');

const experienciaController = {
  create: async (req, res) => {
    try {
      const { empresa, cargo, data_inicio, data_fim, descricao, pessoa_id } = req.body;
      const result = await pool.query(
        'INSERT INTO experiencias (empresa, cargo, data_inicio, data_fim, descricao, pessoa_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [empresa, cargo, data_inicio, data_fim, descricao, pessoa_id]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getByPessoa: async (req, res) => {
    try {
      const { pessoa_id } = req.params;
      const result = await pool.query('SELECT * FROM experiencias WHERE pessoa_id = $1', [pessoa_id]);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = experienciaController;