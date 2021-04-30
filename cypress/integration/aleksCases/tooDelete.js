//aleks Done
/// <reference types ="cypress" />

import * as loginPage from "../../pages/alekspages/start-LogPage"
import * as homeStartPage from "../../pages/alekspages/home-StartPage"
import * as roomsPage from "../../pages/alekspages/roomsPage"
import * as roomCreatPage from "../../pages/alekspages/room-Create"
import * as roomEditPage from "../../pages/alekspages/room-EditPage"

var faker = require('faker')

let randomCategory = faker.random.arrayElement(['single','double','twin'])
let randomFeatcher = faker.random.arrayElement(['balcony', 'ensuite', 'sea_view', 'penthouse'])
let randomNumber = faker.datatype.number(1000)
let randomFloor = faker.datatype.number(100)
let randomPrice = faker.datatype.number(1000000000)

describe("Too Delete in Rooms", () => {

    beforeEach("LoginPage", () => {
        
        loginPage.checkLoginPageTitle("Login")
        loginPage.performValideLogin("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    })
    
    it("Delete in Rooms Page", () => {
        
        homeStartPage.viewRooms("Rooms")
        roomsPage.roomCreatBtn("Room")

        roomCreatPage.fillInFormRoom(randomCategory, randomNumber, randomFloor, randomPrice, randomFeatcher)
        
        roomCreatPage.roomSave("Rooms")

        roomsPage.verifyLastRoom(randomCategory , randomNumber, randomFloor, randomPrice, randomFeatcher)
        
        roomsPage.roomsMenuDel()
        
        roomsPage.roomsBackBtn("Tester Hotel Overview")
    })

    it.only("Delete in Room Edit Page", () => {
        
        homeStartPage.viewRooms("Rooms")
        roomsPage.roomCreatBtn("Room")

        roomCreatPage.fillInFormRoom('twin' , "7", "13", "4886", 'balcony')
        
        roomCreatPage.roomSave("Rooms")

        roomsPage.verifyLastRoom( 'twin' , "7", "13", "4886", "true", 'balcony')
        
        roomsPage.roomsMenuEdt()

        roomEditPage.deleteEdit()
        
        roomsPage.roomsBackBtn("Tester Hotel Overview")
    })
/*
    afterEach("Logout", () => {

        roomsPage.logoutUser("Login")
    })
  */  
})

/*

// test case 5
    it("Too Delete in Rooms", () => {

        cy.visit("http://localhost:3000")
        cy.get('h2').should("contain", "Login")

        cy.get(":nth-child(1) > input").type("tester01")
        cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        
        cy.get(".btn").click()

        cy.get(".user").should("contain", "Welcome tester01!")
        cy.get('h2').should("contain", "Tester Hotel Overview")

    // ROOM
        cy.get(":nth-child(1) > .btn").click()
        cy.get('h2').should("contain", "Rooms")
        
        // Creat page 1

        cy.get("h2 > .btn").click()
    
        cy.get('h2').should("contain", "Room")
    
        cy.get(":nth-child(1) > select").select('Twin') // 'Single','Double',' Twin'
        cy.get(":nth-child(2) > input").clear().type('13')
        cy.get(":nth-child(3) > input").clear().type('7')
        cy.get(".checkbox").click()
        cy.get(":nth-child(5) > input").clear().type('3000')
        cy.get(":nth-child(6) > select").select(['Sea View', 'Penthouse']) //Balcony, Ensuite, Sea View, Penthouse
    
            //cy.get('[href="/rooms"]').click()
        
        cy.get(".blue").click() //Back button

        // Creat page 2

        cy.get("h2 > .btn").click()
    
        cy.get('h2').should("contain", "Room")
    
        cy.get(":nth-child(1) > select").select('Twin') // 'Single','Double',' Twin'
        cy.get(":nth-child(2) > input").clear().type('7')
        cy.get(":nth-child(3) > input").clear().type('13')
        cy.get(".checkbox").click()
        cy.get(":nth-child(5) > input").clear().type('5000')
        cy.get(":nth-child(6) > select").select(['Balcony', 'Ensuite']) //Balcony, Ensuite, Sea View, Penthouse
    
            //cy.get('[href="/rooms"]').click()
        
        cy.get(".blue").click() //Back button

cy.get(".rooms > :nth-child(2) > .action").click()
cy.get(".menu > :nth-child(1)").click()

cy.get('h2').should("contain", "Room")

cy.wait(1000)

cy.get("h2 > .btn").click()

cy.get(".rooms > :nth-child(1) > .action").click()
cy.get(".menu > :nth-child(2)").click()

cy.get('h2').should("contain", "Rooms")

cy.wait(1000)

cy.get(":nth-child(4) > .btn").click()

cy.get(".btn").click()  
cy.get('h2').should("contain", "Login")

})
*/