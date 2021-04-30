//aleks
/// <reference types ="cypress" />

//Elements
const LOGOUT_BTN = ".user > .btn"
const ROOM_CREAT_BTN = "h2 > .btn"
const ROOMS_MENU = ".action"
const ROOMS_MENU_EDIT = ".menu > :nth-child(1)"
const ROMMS_MENU_DELETE = ".menu > :nth-child(2)"
const ROOMS_BACK = ":nth-child(3) > .btn"
const GO_TO_HOME_PAGE=  "h1 > .router-link-active"
const ROOM_LIST = ".room"


/*
const BALCONY_SELECTOR = "balcony"
const ENSUITE_SELECTOR = "ensuite"
const SEA_VIEW_SELECTOR = "sea_view"
const PENTHOUSE_SELECTOR = "penthouse"
const ROOM_SELECTOR_RESULT = ".features"
const M_SELECTOR = '[value="balcony", value="ensuite", value="sea_view", value="penthouse"]'
const A = '[value="balcony"]'  // BALCONY_SELECTOR
const B = '[value="ensuite"]'  // ENSUITE_SELECTOR
const C = '[value="sea_view"]' // SEA_VIEW_SELECTOR
const D = '[value="penthouse"]' // PENTHOUSE_SELECTOR
*/

//Functions / actions

function roomCreatBtn(content){

    cy.get(ROOM_CREAT_BTN).click()
    cy.contains(content)
}

function roomsMenu(){

    cy.get(ROOMS_MENU).click()

}

function roomsMenuEdt(){

    cy.get(ROOMS_MENU).last().click()
    cy.wait(500)
    cy.get(ROOMS_MENU_EDIT).click()

}

function roomsMenuDel(){

    cy.get(ROOMS_MENU).last().click()
    cy.wait(500)
    cy.get(ROMMS_MENU_DELETE).click()
}

function roomsBackBtn(content){

    cy.get(ROOMS_BACK).click()
    cy.contains(content)
}

function logoutUser(content) {

    cy.get(LOGOUT_BTN).click()
    cy.contains(content)
}

function goHomePageRoom(content){

    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}

function verifyLastRoom (cateElem, numberIn, numberflo, numberPri, [a,b,c,d]){ // [a, b] contain
    
    cy.get(ROOM_LIST).last()
    .should("contain", cateElem)
    .and("contain", numberflo)
    .and("be.visible", ) // .and("contain", x)
    .and("contain", numberIn)
    .and("contain", numberPri)
    .and("contain", [])
    
    
}

//exports (exports.default?) ( module.exports ?)
module.exports = {

    roomCreatBtn,
    roomsMenu,
    roomsMenuEdt,
    roomsMenuDel,
    roomsBackBtn,
    logoutUser,
    goHomePageRoom,
    verifyLastRoom

}