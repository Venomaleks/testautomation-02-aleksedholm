// aleks
/// <reference types ="cypress" />

// web-elements
const HEADER = "h2 > div"
const BILL_PRISE = ':nth-child(3) > input'
const CHECK_BOX = '.checkbox'
const BILL_BACK = '[href="/rooms"]'
const BILL_SAVE = '.blue'
const GO_TO_HOME_PAGE= "h1 > .router-link-active"


//Action / Methods / Functions

function clientName(clieName){

    cy.get(BILL_PRISE).clear().type(clieName)
}
 
function clientEmail(clieMail){

    cy.get(CHECK_BOX).clear().type(clieMail)
}
 
 
function clientBack(content){
 
    cy.get(BILL_BACK).click()
    cy.contains(content)
}
 
function goHomePageBill(content){
 
    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}
 
function clientSave(content){
 
    cy.get(BILL_SAVE).click()
    cy.wait(1000)
    cy.contains(content)
}
 
function fillInFormBill(billPris, x){
 
    billPrise(billPris)
    checkBox(x)
 
}

// Exporting the functions.
module.exports = {

    fillInFormBill,
    clientSave,
    goHomePageBill,
    clientBack,
    clientEmail,
    clientName

}