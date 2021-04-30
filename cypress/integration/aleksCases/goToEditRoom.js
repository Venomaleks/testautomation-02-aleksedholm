// aleks DO IT
/// <reference types ="cypress" />

import * as loginPage from "../../pages/alekspages/start-LogPage"
import * as homeStartPage from "../../pages/alekspages/home-StartPage"
import * as roomsPage from "../../pages/alekspages/roomsPage"
import * as roomEditPage from "../../pages/alekspages/room-EditPage"


describe("Go to Rooms Edit", () => {


    // test case 3
    beforeEach("LoginPage", () => {
        
        loginPage.checkLoginPageTitle("Login")
        loginPage.performValideLogin("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    })
    
    it.only("Room Edit Save", () => {

        
        homeStartPage.viewRooms("Rooms")
        roomsPage.roomEditPage("Room")

        roomEditPage.fillInEdit('twin' , "7", "13", "4886", 'balcony')
        
        roomEditPage.editSave("Rooms")

        roomsPage.verifyLastRoom( 'twin' , "7", "13", "4886", "true", 'balcony')
        roomsPage.roomsBackBtn("Tester Hotel Overview")
    })

    it("Room Edit Back", () => {

        homeStartPage.viewRooms("Rooms")
        roomsPage.roomCreatBtn("Room")
       
        roomEditPage.fillInEdit('double' , "7", "13", "4886", 'balcony')

        roomEditPage.editBack()
        roomsPage.roomsBackBtn("Tester Hotel Overview")
    })

    after("Logout", () => {

        roomsPage.logoutUser("Login")
    })



    /*
    // test case 4
    it("Go to Rooms Edit", () => {

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
        
    
    // Creat page

        cy.get(".rooms > :nth-child(1) > .action").click()
        cy.get(".menu > :nth-child(1)").click()

        cy.get('h2').should("contain", "Room")

        cy.get(":nth-child(3) > select").select('Twin') // 'Single','Double',' Twin'
        cy.get(":nth-child(4) > input").clear().type('13')
        cy.get(":nth-child(5) > input").clear().type('7')
        cy.get(".checkbox").click()
        cy.get(":nth-child(7) > input").clear().type('3000')
        cy.get(":nth-child(8) > select").select(['Sea View', 'Penthouse']) //Balcony, Ensuite, Sea View, Penthouse

        //cy.get('[href="/rooms"]').click()
    
        cy.get(".blue").click() //Back button
    
        cy.get('h2').should("contain", "Rooms")
        
        // cy.last(":nth-child > .action").click() // > .action //  > .menu 


        cy.get(":nth-child(3) > .btn").click()

        cy.get(".user > .btn").click()  
        cy.get('h2').should("contain", "Login")

    })
*/

})