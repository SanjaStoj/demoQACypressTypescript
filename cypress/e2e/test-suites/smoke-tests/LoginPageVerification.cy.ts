//THIRD
/// <reference types="cypress" />

describe('LoginFlow tests', () => {
  let testData: any;
  
  beforeEach(() => {
    cy.fixture("input.data").then((fixtureData) => {
      testData = fixtureData;
    });
    cy.visit('/login')
    cy.url().should('include','demoqa')
  });

   it('tests elements on the Login page and verifies successful login', function () {
    cy.verifyLoginPageElement(testData.loginPage);
    cy.login(
      Cypress.env("username"),
      Cypress.env("password")
    );
    
       cy.assertSuccessfulLogin();
          

   });

   it('tests elements on the Login page and verifies unsuccessful login', function () {
        cy.verifyLoginPageElement(testData.loginPage);
        cy.login(
          Cypress.env("username1"),
          Cypress.env("password")
        );
           cy.assertFailedLogin();
   
   });
           
  });
