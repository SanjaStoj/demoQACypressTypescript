//In this page we are writing all locators for the elements on the Book Store / Book Detail pages

class bookStorePage {

    goToBookStoreButton(){
        return cy.contains('button', 'Go To Book Store');
    }

    bookTitleLink(bookTitle: string){
        return cy.get(`[id="see-book-${bookTitle}"]`).find('a');
    }

    addToCollectionButton(){
        return cy.contains('button', 'Add To Your Collection');
    }

    backToBookStoreButton(){
        return cy.contains('button', 'Back To Book Store');
    }

    profileNavLink(){
        return cy.get('a[href="/profile"]');
    }

}

export default bookStorePage;
