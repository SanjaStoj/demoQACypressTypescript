//SECOND - Here in the utilities we are writing all methods and we are using locators already created
import loginPage from "../objects/loginPage"; // we need to import 
const login = new loginPage();

Cypress.Commands.add('verifyLoginPageElement', function(){
    login.welcomeHeader().should('be.visible'); //page title is read from json file
    login.inputUserName().should('be.visible');
    login.inputPassword().should('be.visible');
    login.btnLogin().should('be.visible');
});

//Assert the URL and that user gets an error message
Cypress.Commands.add('assertFailedLogin', function() {
    cy.url().should('include', 'https://demoqa.com/login');
    login.errorMessage().should('exist');
});
