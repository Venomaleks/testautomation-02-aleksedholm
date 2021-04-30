// aleks
/// <reference types ="cypress" />

// web-elements
const HEADER = "h2 > div"
const CATEGORY_SELECTOR = ':nth-child(1) > select'
const NUMBER_INPUT = ':nth-child(2) > input'
const FLOOR_INPUT = ':nth-child(3) > input'
const CHECK_BOX = '.checkbox'
const PRICE_INPUT = ':nth-child(5) > input'
const FEATUR_MULT_SELECTOR = ':nth-child(6) > select'
const ROOM_BACK = '[href="/rooms"]'
const ROOM_SAVE = '.blue'
const GO_TO_HOME_PAGE= "h1 > .router-link-active"

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

//Action / Methods / Functions
function categorySelector(cateElem){

   cy.get(CATEGORY_SELECTOR).select(cateElem)
}

function numberInput(numberIn){

    cy.get(NUMBER_INPUT).type(numberIn)
}

function floorInput(numberflo){

    cy.get(FLOOR_INPUT).type(numberflo)
}

function checkBox(x){

    cy.get(CHECK_BOX).click(x)
}

function priceInput(numberPri){

    cy.get(PRICE_INPUT).type(numberPri)
}

function featureSelector([a,b,c,d]){ //contain // [a, b, c, d]
 
    cy.get(FEATUR_MULT_SELECTOR).select([a,b,c,d]) // 'balcony', 'ensuite', 'sea_view', 'penthouse'
}

function roomBack(content){

    cy.get(ROOM_BACK).click()
    cy.contains(content)
}

function goHomePageRoom(content){

    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}

function roomSave(content){

    cy.get(ROOM_SAVE).click()
    cy.wait(1000)
    cy.contains(content)
}

function fillInFormRoom(cateElem, numberIn, numberflo, numberPri, [a,b,c,d]){ // [a,b,c,d] contain a,b,c,d

    categorySelector(cateElem)
    numberInput(numberIn)
    floorInput(numberflo)
    checkBox()
    priceInput(numberPri)
    featureSelector([a,b,c,d]) // [a, b] contain

}


// Exporting the functions.
module.exports = {

    fillInFormRoom,
    categorySelector,
    numberInput,
    floorInput,
    checkBox,
    priceInput,
    featureSelector,
    roomBack,
    roomSave,
    goHomePageRoom
    
}