// aleks
/// <reference types ="cypress" />

// web-elements
const HEADER = "h2 > div"
const START_DATE = ':nth-child(1) > input'
const END_DATE = ':nth-child(2) > input'
const CLIENT_SELECTOR = ':nth-child(3) > select'
const ROOM_SELECTOR = ':nth-child(4) > select'
const BILL_SELECTOR = ':nth-child(5) > select'
const RESERV_BACK = '[href="/rooms"]'
const RESERV_SAVE = '.blue'
const GO_TO_HOME_PAGE= "h1 > .router-link-active"

//Action / Methods / Functions

function startDate(sDate){

    cy.get(START_DATE).type(sDate)
}

function endDate(eDate){

    cy.get(END_DATE).type(eDate)
}

function clientSelector(clientSelec){

   cy.get(CLIENT_SELECTOR).select(clientSelec)
}

function roomSelector(roomSelec){

    cy.get(ROOM_SELECTOR).select(roomSelec)
}

function billSelector(billSelec){

    cy.get(BILL_SELECTOR).select(billSelec)
}

function reservBack(content){

    cy.get(RESERV_BACK).click()
    cy.contains(content)
}

function goHomePageReserv(content){

    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}

function reservSave(content){

    cy.get(RESERV_SAVE).click()
    cy.wait(1000)
    cy.contains(content)
}

function fillInFormReserv(sDate, eDate, clientSelec, roomSelec, billSelec){

    startDate(sDate)
    endDate(eDate)
    clientSelector(clientSelec)
    roomSelector(roomSelec)
    billSelector(billSelec)

}


// Exporting the functions.
module.exports = {

    startDate,
    endDate,
    clientSelector,
    roomSelector,
    billSelector,
    reservBack,
    goHomePageReserv,
    reservSave,
    fillInFormReserv

}