//aleks
/// <reference types ="cypress" />

//Elements

const LOGOUT_BTN = ".user > .btn"
const VIEW_ROOMS_BTN = ".blocks > :nth-child(1) > .btn"
const VIEW_CLIENTS_BTN = ".blocks > :nth-child(2) > .btn"
const VIEW_BILLS_BTN = ".blocks > :nth-child(3) > .btn"
const VIEW_RESURVATIONS_BTN = ".blocks > :nth-child(4) > .btn" // .blocks > :nth-child(4) >
const EXTRA_ERROR_BTN = ".small > div > .btn"
const GO_TO_HOME_PAGE= "h1 > .router-link-active"

//Functions / actions

    function errorBTN(content){

        cy.get(EXTRA_ERROR_BTN).click()
        cy.contains(content)

    }

    function logoutUser(content) {

        cy.get(LOGOUT_BTN).click()
        cy.contains(content)
    }

    function viewRooms(content) {

        cy.get(VIEW_ROOMS_BTN).click()
        cy.contains(content)
    }

    function viewClients(content) {

        cy.get(VIEW_CLIENTS_BTN).click()
        cy.contains(content)
    }

    function viewBills(content) {

        cy.get(VIEW_BILLS_BTN).click()
        cy.contains(content)
    }

    function viewResurvations(content) {

        cy.get(VIEW_RESURVATIONS_BTN).click()
        cy.contains(content)
    }

    function goHomePage(content){

        cy.get(GO_TO_HOME_PAGE).click()
        cy.contains(content)
    }

//exports

exports.default = {

    logoutUser,
    viewRooms,
    viewClients,
    viewBills,
    viewResurvations,
    goHomePage,
    errorBTN
}