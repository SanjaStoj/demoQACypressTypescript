//In this page we are writing all locators for the element on the Login page

class profilePage {

    profileHeader(){
        return cy.get('div.text-right').eq(0);
    }
  
    usernameLabel(){
        return cy.get('label#userName-label');
    }

    search(){
        return cy.get('input#searchBox');
    }

    bookResultRows(){
        return cy.get('table tbody tr');
    }

    deleteBookIcon(bookTitle: string){
        return cy.contains('table tbody tr', bookTitle).find('span[id^="delete-record-"]');
    }

    deleteBookModal(){
        return cy.contains('.modal-content', 'Delete Book');
    }

    deleteBookConfirmButton(){
        return cy.contains('.modal-content button', 'OK');
    }

}

export default profilePage;