/// <reference types="cypress" />
describe('AddBookToProfile tests', () => {
    let testData: any;

    beforeEach(() => {
        cy.fixture("input.data").then((fixtureData) => {
            testData = fixtureData;
        });
        cy.visit('/login')
        cy.url().should('include', 'demoqa')
        cy.login(
            Cypress.env("username"),
            Cypress.env("password")
        );
        cy.assertSuccessfulLogin();
    });

    it('verifies that a book selected from the Book Store is added to the profile collection', function () {
        const bookTitle = testData.profilePage.Book1.Title;

        cy.goToBookStore();
        cy.selectBook(bookTitle);
        cy.addToCollection();
        cy.backToBookStore();
        cy.goToProfile();
        cy.verifyBookInProfile(bookTitle);
    });

    it('verifies that a book added to the profile collection can be deleted', function () {
        const bookTitle = testData.profilePage.Book1.Title;

        cy.goToBookStore();
        cy.selectBook(bookTitle);
        cy.addToCollection();
        cy.backToBookStore();
        cy.goToProfile();
        cy.verifyBookInProfile(bookTitle);

        cy.deleteBookFromProfile(bookTitle);
        cy.contains('table tbody tr', bookTitle).should('not.exist');
    });

});
