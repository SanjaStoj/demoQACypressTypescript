/// <reference types="cypress" />
describe('LoginFlow tests', () => {
    let testData: any;
    
    beforeEach(() => {
      cy.fixture("input.data").then((fixtureData) => {
        testData = fixtureData;
      });
      cy.visit('/login')
      cy.url().should('include','demoqa')
      cy.login(
        Cypress.env("username"),
        Cypress.env("password")
      );
    });
    
    it('verify that username label is displayed after successfully login', function () {
        cy.assertSuccessfulLogin();

    });

   it('verifies that searching for an existing book returns the matching result', function () {
        cy.assertSuccessfulLogin();
        cy.searchBook(testData.profilePage.Book1.Title, testData.profilePage.Book1);
    });

   it('verifies that searching for a non-existent book returns no results', function () {
        cy.assertSuccessfulLogin();
        cy.searchBook('NonExistentBookXYZ');
    });

});