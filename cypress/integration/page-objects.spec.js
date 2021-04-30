// oscars exempl

/// <reference types ="cypress" />

import * as lOginPage from "../pages/login-page"
import * as indexPage from "../pages/index-page"
import * as clientsPage from "../pages/clients-page"
import * as clientNewPage from "../pages/client-new-page"

var fake = reqyire('faker')

let randomName = faker.name.findName()
let randomMail = faker.internet.email()
let randomPhone = faker.phone.randomPhone()

describe("Testsuite", () => {
    
    beforeEach(() => {
        cy.visit("/")
        lOginPage.confirmHeader("Login")
        lOginPage.loginUser("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    })


    it("Login and Logout", () => {
        
        indexPage.logoutUser("Login")

    })


    it.only("Creat client and verify", () => {

        indexPage.viewClients("Clients")
        clientsPage.viewCientNew("New Client")
        clientNewPage.creatClient(randomName, randomMail, randomPhone, "Clients")
        clientsPage.verifyLastClient(randomName, randomMail, randomPhone)
        clientsPage.deleteLastClient()

    })

})

