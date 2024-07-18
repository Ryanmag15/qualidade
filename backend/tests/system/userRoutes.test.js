const request = require('supertest');
const app = require('../../app'); // Certifique-se de que você tem um app Express configurado

describe('User API', () => {
  let userId;

  it('should list all users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
  });

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'Jane Doe', email: 'jane@example.com', password: 'password123' });

    userId = response.body.id;

    expect(response.statusCode).toBe(201);
  });

  it('should get a user by ID', async () => {
    const response = await request(app).get(`/users/${userId}`);
    expect(response.statusCode).toBe(200);
  });

  it('should return 404 for non-existing user', async () => {
    const response = await request(app).get('/users/99999');
    expect(response.statusCode).toBe(404);
  });

  it('should update a user', async () => {
    const response = await request(app)
      .put(`/users/${userId}`)
      .send({ name: 'Jane Doe Updated', email: 'jane_updated@example.com', password: 'newpassword123' });

    expect(response.statusCode).toBe(200);
  });

  it('should return 404 for updating non-existing user', async () => {
    const response = await request(app)
      .put('/users/99999')
      .send({ name: 'Non Existent User' });

    expect(response.statusCode).toBe(404);
  });

  it('should delete a user', async () => {
    const response = await request(app).delete(`/users/${userId}`);
    expect(response.statusCode).toBe(204);
  });

  it('should return 404 for deleting non-existing user', async () => {
    const response = await request(app).delete('/users/99999');
    expect(response.statusCode).toBe(404);
  });
});
