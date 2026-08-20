import bookStorePage from "../objects/bookStorePage";
import profilePage from "../objects/profilePage";
const bookStore = new bookStorePage();
const profile = new profilePage();

Cypress.Commands.add('goToBookStore', function() {
    bookStore.goToBookStoreButton().click();
    cy.url().should('include', '/books');
});

Cypress.Commands.add('selectBook', function(bookTitle) {
    bookStore.bookTitleLink(bookTitle).click();
    cy.url().should('include', 'search=');
});

Cypress.Commands.add('addToCollection', function() {
    cy.on('window:alert', () => true);
    bookStore.addToCollectionButton().click();
});

Cypress.Commands.add('backToBookStore', function() {
    bookStore.backToBookStoreButton().click();
    cy.url().should('include', '/books');
});

Cypress.Commands.add('goToProfile', function() {
    bookStore.profileNavLink().click();
    cy.url().should('include', '/profile');
});

Cypress.Commands.add('verifyBookInProfile', function(bookTitle) {
    profile.bookResultRows().should('contain.text', bookTitle);
});
//delete-иконата отвора custom modal (не native confirm()), со текст "Delete Book / Do you want to delete this book?" и копче "OK" — тоа го handle-иравме преку deleteBookModal()/deleteBookConfirmButton().
Cypress.Commands.add('deleteBookFromProfile', function(bookTitle) {
    profile.deleteBookIcon(bookTitle).click();
    profile.deleteBookModal().should('be.visible');
    profile.deleteBookConfirmButton().click();
});
