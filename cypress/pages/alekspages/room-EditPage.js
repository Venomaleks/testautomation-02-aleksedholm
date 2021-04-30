// aleks
/// <reference types ="cypress" />

// web-elements
const HEADER = "h2 > div"
const CATEGORY_SELECTOR = ':nth-child(3) > select'
const NUMBER_INPUT = ':nth-child(4) > input'
const FLOOR_INPUT = ':nth-child(5) > input'
const CHECK_BOX = '.checkbox'
const PRICE_INPUT = ':nth-child(7) > input'
const FEATUR_MULT_SELECTOR = ':nth-child(8) > select'
const ROOM_BACK = '[href="/rooms"]'
const ROOM_SAVE = '.blue'
const GO_TO_HOME_PAGE= "h1 > .router-link-active"
const DELETE_EDIT_PAGE = "h2 > .btn"

/*

const BALCONY_SELECTOR = '[value="balcony"]'
const ENSUITE_SELECTOR = '[value="ensuite"]'
const SEA_VIEW_SELECTOR = '[value="sea_view"]'
const PENTHOUSE_SELECTOR = '[value="penthouse"]'

*/

//Action / Methods / Functions

function categorySelector(cateElem){

    cy.get(CATEGORY_SELECTOR).select(cateElem)
}
 
function numberInput(numberIn){
 
    cy.get(NUMBER_INPUT).clear().type(numberIn)
}
 
function floorInput(numberflo){
 
    cy.get(FLOOR_INPUT).clear().type(numberflo)
}
 
function checkBox(x){
 
    cy.get(CHECK_BOX).click(x)
}
 
function priceInput(numberPri){
 
    cy.get(PRICE_INPUT).clear().type(numberPri)
}
 
function featureSelector([a,b,c,d]){ // a,b,c,d
 
    cy.get(FEATUR_MULT_SELECTOR).select([a,b,c,d])
}
 
function editBack(content){
 
    cy.get(ROOM_BACK).click()
    cy.contains(content)
} 
 
function goHomePageRoom(content){
 
    cy.get(GO_TO_HOME_PAGE).click()
    cy.contains(content)
}
 
function editSave(content){
 
    cy.get(ROOM_SAVE).click()
    cy.wait(1000)
    cy.contains(content)
}
 
function deleteEdit(){

    cy.get(DELETE_EDIT_PAGE).click()
    cy.wait(1000)

}

function fillInEdit (cateElem, numberIn, numberflo, numberPri, [a,b,c,d]){

    categorySelector(cateElem)
    numberInput(numberIn)
    floorInput(numberflo)
    checkBox()
    priceInput(numberPri)
    featureSelector([a,b,c,d])

// BALCONY_SELECTOR, ENSUITE_SELECTOR, SEA_VIEW_SELECTOR, PENTHOUSE_SELECTOR
}

// Exporting the functions.
module.exports = {

    fillInEdit,
    categorySelector,
    numberInput,
    floorInput,
    checkBox,
    priceInput,
    featureSelector,
    editBack,
    editSave,
    goHomePageRoom,
    deleteEdit

}