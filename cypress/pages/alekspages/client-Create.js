// aleks
/// <reference types ="cypress" />

// web-elements
const HEADER = "h2 > div"
const CLIENT_NAME = ':nth-child(1) > input'
const CLIENT_EMAIL = ':nth-child(2) > input'
const CLIENT_PHONE = ':nth-child(3) > input'
const CLIENT_BACK = '[href="/rooms"]'
const CLIENT_SAVE = '.blue'
const GO_TO_HOME_PAGE= "h1 > .router-link-active"

//Action / Methods / Functions
function clientName(clieName){

   cy.get(CLIENT_NAME).type(clieName)
}

function clientEmail(clieMail){

    cy.get(CLIENT_EMAIL).type(clieMail)
}

function clientPhone(cliePhone){

    cy.get(CLIENT_PHONE).type(cliePhone)
}

function clientBack(content){

    cy.get(CLIENT_BACK).click()
    cy.contains(content)
}

function goHomePageClient(content){

    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}

function clientSave(content){

    cy.get(CLIENT_SAVE).click()
    cy.wait(1000)
    cy.contains(content)
}

function fillInFormClient(clieName, clieMail, cliePhone){

    categorySelector(clieName)
    numberInput(clieMail)
    floorInput(cliePhone)
 
}


// Exporting the functions.
module.exports = {

    fillInFormClient,
    clientSave,
    goHomePageClient,
    clientBack,
    clientPhone,
    clientEmail,
    clientName

}