const request = require('supertest');
const app = require('../../app'); // Certifique-se de que você tem um app Express configurado

describe('UserController', () => {
  let userId;

  it('should list all users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com', password: 'password' });

    userId = response.body.id;

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('john@example.com');
  });

  it('should get a user by ID', async () => {
    const response = await request(app).get(`/users/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', userId);
  });

  it('should update a user', async () => {
    const response = await request(app)
      .put(`/users/${userId}`)
      .send({ name: 'John Doe Updated', email: 'john_updated@example.com', password: 'newpassword' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('name', 'John Doe Updated');
  });

  it('should delete a user', async () => {
    const response = await request(app).delete(`/users/${userId}`);
    expect(response.statusCode).toBe(204);
  });
});
