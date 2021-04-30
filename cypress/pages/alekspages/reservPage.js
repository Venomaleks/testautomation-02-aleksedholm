//aleks
/// <reference types ="cypress" />

//Elements
const LOGOUT_BTN = ".user > .btn"
const RESERV_CREAT_BTN = "h2 > .btn"
const RESERVS_MENU = ".action"
const RESERVS_MENU_EDIT = ".menu > :nth-child(1)"
const RESERVS_MENU_DELETE = ".menu > :nth-child(2)"
const RESERVS_BACK = ":nth-child(3) > .btn"
const GO_TO_HOME_PAGE= "h1 > .router-link-active"
const RESERV_LIST = ".reservation"


//Functions / actions

function reservCreatBtn(content){

    cy.get(RESERV_CREAT_BTN).click()
    cy.contains(content)
}

function reservsMenu(){

    cy.get(RESERVS_MENU).click()

}

function reservsMenuEdt(){

    cy.get(RESERVS_MENU).last().click()
    cy.get(RESERVS_MENU_EDIT).click()

}

function reservsMenuDel(){

    cy.get(RESERVS_MENU).last().click()
    cy.get(RESERVS_MENU_DELETE).click()
}

function reservsBackBtn(content){

    cy.get(RESERVS_BACK).click()
    cy.contains(content)
}

function logoutUser(content) {

    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function goHomePageReserv(content){

    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}

function verifyLastReserv (sDate, eDate, clientSelec, roomSelec, billSelec){
    
    cy.get(RESERV_LIST).last()
    .should("contain", sDate)
    .and("contain", eDate)
    .and("contain", clientSelec)
    .and("contain", roomSelec)
    .and("contain", billSelec)

}


//exports (exports.default?) ( module.exports ?)
module.exports = {

    reservCreatBtn,
    reservsMenu,
    reservsMenuEdt,
    reservsMenuDel,
    reservsBackBtn,
    logoutUser,
    goHomePageReserv,
    verifyLastReserv

}