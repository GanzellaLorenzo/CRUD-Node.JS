const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/products', (req, res) => {
  const { name, description, price, available } = req.body;
  const query = `INSERT INTO products (name, description, price, available) VALUES (?, ?, ?, ?)`;

  db.run(query, [name, description, price, available], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

app.get('/api/products', (req, res) => {
  const query = `SELECT * FROM products ORDER BY price ASC`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM products WHERE id = ?`;

  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Produto excluído com sucesso!' });
  });
});

app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { available } = req.body;
  const query = `UPDATE products SET available = ? WHERE id = ?`;

  db.run(query, [available, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Disponibilidade atualizada com sucesso!' });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
