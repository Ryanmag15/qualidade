describe('User API Tests', () => {
    let userId;
  
    // Criação de um usuário para os testes
    before(() => {
      cy.request('POST', 'http://localhost:3000/users', {
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password'
      }).then((response) => {
        expect(response.status).to.eq(201);
        userId = response.body.id; // Salva o ID do usuário criado
      });
    });
  
    // Teste para listar todos os usuários
    it('should list all users', () => {
      cy.request('GET', 'http://localhost:3000/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
      });
    });
  
    // Teste para criar um novo usuário
    it('should create a new user', () => {
      cy.request('POST', 'http://localhost:3000/users', {
        name: 'Another Test User',
        email: 'anothertestuser@example.com',
        password: 'password'
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'Another Test User');
      });
    });
  
    // Teste para buscar um usuário pelo ID
    it('should fetch a user by ID', () => {
      cy.request('GET', `http://localhost:3000/users/${userId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Test User');
      });
    });
  
    // Teste para atualizar um usuário pelo ID
    it('should update a user by ID', () => {
      cy.request('PUT', `http://localhost:3000/users/${userId}`, {
        name: 'Updated Test User',
        email: 'updatedtestuser@example.com',
        password: 'newpassword'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Updated Test User');
      });
    });
  
    // Teste para deletar um usuário pelo ID
    it('should delete a user by ID', () => {
      cy.request('DELETE', `http://localhost:3000/users/${userId}`).then((response) => {
        expect(response.status).to.eq(204);
      });
  
      // Verifique se o usuário foi realmente deletado
      cy.request({
        method: 'GET',
        url: `http://localhost:3000/users/${userId}`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
  