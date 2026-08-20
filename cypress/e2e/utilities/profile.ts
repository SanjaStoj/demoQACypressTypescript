import profilePage from "../objects/profilePage";
const profile = new profilePage();

Cypress.Commands.add('assertSuccessfulLogin', function() {
    cy.url().should('include', 'profile');
    profile.profileHeader().should('be.visible');
});

Cypress.Commands.add('searchBook', function(searchTerm, expectedBook) {
    cy.visit('/books');
    profile.search().clear();
    profile.search().type(searchTerm);

    if (expectedBook) {
        profile.bookResultRows().should('have.length', 1);
        profile.bookResultRows().eq(0)
            .should('contain.text', expectedBook.Title)
            .and('contain.text', expectedBook.Author)
            .and('contain.text', expectedBook.Publisher);
    } else {
        profile.bookResultRows().should('not.exist');
    }
});
