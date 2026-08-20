// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

require('cy-verify-downloads').addCustomCommand(); // for download csv file 

Cypress.Commands.add("goToLoginPage", function() {
  cy.visit("/");
});

Cypress.Commands.add("login", function(username: string, password: string) {
  cy.get('input#userName').should('exist').type(username);
  cy.get('input#password').should('exist').type(password);
  cy.get('button#login').click();
});


  




// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




