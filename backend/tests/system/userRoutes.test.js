// userRoutes.test.js

const request = require('supertest');
const app = require('../app');

describe('POST /users', () => {
    it('should create a new user with status 201', async () => {
        const response = await request(app)
            .post('/users')
            .send({ name: 'Test User', email: 'test@example.com', password: 'password' });
        expect(response.status).toBe(201);
    });
});

// Escrever testes para os outros endpoints (GET by ID, PUT, DELETE)
