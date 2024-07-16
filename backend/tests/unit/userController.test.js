// userController.test.js

const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
    it('should respond with status 200', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
    });
});

// Escrever testes para os outros métodos (POST, GET by ID, PUT, DELETE)
