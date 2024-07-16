const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware para o corpo da requisição
app.use(express.json());

// Usando as rotas definidas
app.use(userRoutes);

// Porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
