// Aqui você pode adicionar comandos globais e configurações do Cypress

// Exemplo: adicionar comandos customizados
Cypress.Commands.add('login', (username, password) => {
    cy.request('POST', '/login', { username, password })
      .then((response) => {
        window.localStorage.setItem('authToken', response.body.token);
      });
  });
  