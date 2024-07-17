const express = require('express');
const { Sequelize } = require('sequelize');
const userRoutes = require('./routes/userRoutes'); // Verifique o caminho correto do seu arquivo userRoutes
const config = require('./config/config.json');

const app = express();
const port = 3000;

// Middleware para processar JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do Sequelize
console.log('Configuração do Sequelize:');
console.log('Database:', config.development.database);
console.log('Username:', config.development.username);
console.log('Password:', config.development.password);
console.log('Host:', config.development.host);

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: 'mysql'
});

// Teste de conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Falha ao conectar com o banco de dados:', err);
  });

// Defina suas rotas aqui
app.use('/', userRoutes);

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
