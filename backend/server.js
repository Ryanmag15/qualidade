// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Defina suas rotas aqui
app.get('/', (req, res) => {
  res.send('Esse aqui é o Backend');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
