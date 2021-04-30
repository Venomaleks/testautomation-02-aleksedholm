//aleks
/// <reference types ="cypress" />

//Elements
const LOGOUT_BTN = ".user > .btn"
const CLIENT_CREAT_BTN = "h2 > .btn"
const CLIENTS_MENU = ".action"
const CLIENTS_MENU_EDIT = ".menu > :nth-child(1)"
const CLIENTS_MENU_DELETE = ".menu > :nth-child(2)"
const CLIENTS_BACK = ":nth-child(3) > .btn"
const GO_TO_HOME_PAGE= "h1 > .router-link-active"
const CLIENT_LIST = ".client"


//Functions / actions

function clientCreatBtn(content){

    cy.get(CLIENT_CREAT_BTN).click()
    cy.contains(content)
}

function clientsMenu(){

    cy.get(CLIENTS_MENU).click()

}

function clientsMenuEdt(){

    cy.get(CLIENTS_MENU).last().click()
    cy.get(CLIENTS_MENU_EDIT).click()

}

function clientsMenuDel(){

    cy.get(CLIENTS_MENU).last().click()
    cy.get(CLIENTS_MENU_DELETE).click()
}

function clientsBackBtn(content){

    cy.get(CLIENTS_BACK).click()
    cy.contains(content)
}

function logoutUser(content) {

    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function goHomePageClient(content){

    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}

function verifyLastClient (clieName, clieMail, cliePhone ){ // [a, b] contain
    
    cy.get(CLIENT_LIST).last()
    .should("contain", clieName)
    .and("contain", clieMail)
    .and("contain", cliePhone)

}

//exports (exports.default?) ( module.exports ?)
module.exports = {

    clientCreatBtn,
    clientsMenu,
    clientsMenuEdt,
    clientsMenuDel,
    clientsBackBtn,
    logoutUser,
    goHomePageClient,
    verifyLastClient

}