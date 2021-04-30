//rafaels exempl

/// <reference types ="cypress" />

//Elements
const LOGOUT_BTN = '.btn'

//Actions
function preformLogout(conformationContent){
    
    cy.get(LOGOUT_BTN).click()
    cy.contains(conformationContent)
}

// Export the methods / Functions / actions

module.exports = {

    preformLogout
}