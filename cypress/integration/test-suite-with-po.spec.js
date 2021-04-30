// rafaels exempl

/// <reference types ="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashbordFuncs from '../pages/DashbordPage'

describe("Test suite with Page-objects", () => {

    beforeEach(() => {
    
        cy.visit('/')
        loginFuncs.checkLoginPageTitle()

    })


    it("perform a balid login and logout", () => {
  
        loginFuncs.performValideLogin('tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Welcome')
        dashbordFuncs.preformLogout('Login')
    })

})


// before

// beforEach

// afterEach

// after
/*
before(() => {
    cy.log('before')
})


beforeEach(() => {
    cy.log('before each')
})

afterEach(() => {
    cy.log('after each')
})


after(() => {
    
    cy.log('after all')
})    
*/
