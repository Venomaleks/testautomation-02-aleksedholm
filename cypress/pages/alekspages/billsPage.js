//aleks
/// <reference types ="cypress" />

//Elements
const LOGOUT_BTN = ".user > .btn"
const BILL_CREAT_BTN = "h2 > .btn"
const BILLS_MENU = ".action"
const BILLS_MENU_EDIT = ".menu > :nth-child(1)"
const BILLS_MENU_DELETE = ".menu > :nth-child(2)"
const BILLS_BACK = ":nth-child(3) > .btn"
const GO_TO_HOME_PAGE= "h1 > .router-link-active"
const BILL_LIST = ".bill"
const ROOM_SELECTOR_RESULT = ".features"

//Functions / actions

function billCreatBtn(content){

    cy.get(BILL_CREAT_BTN).click()
    cy.contains(content)
}

function billsMenu(){

    cy.get(BILLS_MENU).click()

}

function billsMenuEdt(){

    cy.get(BILLS_MENU).last().click()
    cy.get(BILLS_MENU_EDIT).click()

}

function billsMenuDel(){

    cy.get(BILLS_MENU).last().click()
    cy.get(BILLS_MENU_DELETE).click()
}

function billsBackBtn(content){

    cy.get(BILLS_BACK).click()
    cy.contains(content)
}

function logoutUser(content) {

    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function goHomePageBill(content){

    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}

function verifyLastBill (billPris, x){ 
    
    cy.get(BILL_LIST).last()
    .should("contain", billPris)
    .and("contain", x)

}

//exports (exports.default?) ( module.exports ?)
module.exports = {

    billCreatBtn,
    billsMenu,
    billsMenuEdt,
    billsMenuDel,
    billsBackBtn,
    logoutUser,
    goHomePageBill,
    verifyLastBill

}