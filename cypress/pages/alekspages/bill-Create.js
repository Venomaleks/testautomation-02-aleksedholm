//aleks
/// <reference types ="cypress" />

//Elements
const LOGOUT_BTN = ".user > .btn"
const BILL_PRISE = ':nth-child(1) > input'
const CHECK_BOX = '.checkbox'
const BILLS_BACK = ":nth-child(3) > .btn"
const GO_TO_HOME_PAGE= "h1 > .router-link-active"


//Functions / actions

function billPrise(billPris){

    cy.get(BILL_PRISE).type(billPris)
}

function checkBox(x){

    cy.get(CHECK_BOX).click(x)
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

function fillInFormBill(billPris, x){
 
    billPrise(billPris)
    checkBox(x)
 
}


//exports (exports.default?) ( module.exports ?)
module.exports = {

    billsBackBtn,
    logoutUser,
    goHomePageBill,
    billPrise,
    checkBox,
    fillInFormBill

}