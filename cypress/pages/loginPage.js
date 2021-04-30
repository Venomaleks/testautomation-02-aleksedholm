//rafaels exempl

/// <reference types ="cypress" />

// web-elements
const LOGIN_PAGE_TITLE = 'Testers Hotel'
const USERNAME_TEXTFIELD = ':nth-child(1) > input'
const PASSWPRD_TEXTFIELD = ':nth-child(2) > input'
const SUBMIT_BTN = '.btn'
const FORM_LABEL = 'h2'

//Action / Methods / Functions
function checkLoginPageTitle(){
    
    cy.title().should('eq', LOGIN_PAGE_TITLE)
}

function performValideLogin(username,password, confirmationContent) {
    cy.contains(FORM_LABEL)
    cy.get(USERNAME_TEXTFIELD).type(username) // "tester01"
    cy.get(PASSWPRD_TEXTFIELD).type(password) //"GteteqbQQgSr88SwNExUQv2ydb7xuf8c"
    cy.get(SUBMIT_BTN).click()
    cy.contains(confirmationContent) // "Welcome" I did // "Login" rafael
    //cy.get(".user").should("contain", "Welcome")

}


// Exporting the functions.
module.exports = {

    checkLoginPageTitle,
    performValideLogin
}



