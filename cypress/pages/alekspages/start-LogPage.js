// aleks
/// <reference types ="cypress" />

// web-elements
const HEADER = "h2"
const USERNAME_TEXTFIELD = ':nth-child(1) > input'
const PASSWPRD_TEXTFIELD = ':nth-child(2) > input'
const SUBMIT_BTN = '.btn'
const GO_TO_HOME_PAGE = "h1 > .router-link-active"

//Action / Methods / Functions
function checkLoginPageTitle(content){

    cy.visit("/")
    cy.wait(1000)
    cy.get(HEADER).should("contain", content)
}

function homeLoginButton(content){
    
    cy.wait(1000)
    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)

}

function performValideLogin(username,password, content) {
    
    cy.get(USERNAME_TEXTFIELD).type(username) // "tester01"
    cy.get(PASSWPRD_TEXTFIELD).type(password) //"GteteqbQQgSr88SwNExUQv2ydb7xuf8c"
    cy.get(SUBMIT_BTN).click()
    cy.wait(1000)
    cy.get(HEADER).should("contain", content)
    
}


// Exporting the functions.
module.exports = {

    checkLoginPageTitle,
    performValideLogin,
    homeLoginButton

}