//this file is not needed if your project is in Java script
//TypeScript declaration file that augments the Cypress testing framework with custom commands and types
//These custom commands and types can be used in Cypress test scripts to interact with and test a web application

import "./commands";
import "./e2e";


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

declare global {
  //extends the global namespace in TypeScript
  namespace Cypress {
    //defines an extension for the Cypress namespace (to add custom properties and methods to the Cypress object)
    interface Chainable {
      verifyDownload(value: string, { }): any; //verified the download of a file via extension
      //defines a new interface named Chainable (to describe methods that return a chainable object)
      dataCy(value: string): Chainable<JQuery<HTMLElement>>; //a method to interact with elements by their data attributes
      login(username: string, password: string): void; //logs in to the application using AAD credentials
      goToLoginPage(): void; 
      verifyLoginPageElement(testData: any): void; 
      assertFailedLogin(): void; // error message for wrong username or password
      assertSuccessfulLogin(): void;
      searchBook(searchTerm: string, expectedBook?: any): void;
      goToBookStore(): void;
      selectBook(bookTitle: string): void;
      addToCollection(): void;
      backToBookStore(): void;
      goToProfile(): void;
      verifyBookInProfile(bookTitle: string): void;
      deleteBookFromProfile(bookTitle: string): void;





    }
}
}
