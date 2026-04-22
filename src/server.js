const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());

// 1. Primeiro as rotas da API
app.use('/', routes);

// 2. Depois a rota raiz (Home)
app.get('/', (req, res) => {
  res.json({ message: "API Currículo Express Online!" });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;