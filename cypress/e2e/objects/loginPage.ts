//In this page we are writing all locators for the element on the Login page

class loginPage {

welcomeHeader(){
    return cy.contains('h2', 'Welcome,');
}

inputUserName(){
    return cy.get('input#userName');
}
inputPassword(){
    return cy.get('input#password');
}
btnLogin(){
    return cy.get('button#login');
}
errorMessage(){
    return cy.get('p#name');
}


}

export default loginPage;