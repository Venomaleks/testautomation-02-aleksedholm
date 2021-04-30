// aleks DO IT
/// <reference types ="cypress" />

import * as loginPage from "../pages/alekspages/start-LogPage"
import * as homeStartPage from "../pages/alekspages/home-StartPage"

import * as roomPage from "../pages/alekspages/roomsPage"
import * as creatRoom from "../pages/alekspages/room-Create"
import * as editRoom from "../pages/alekspages/room-EditPage"

import * as clientPage from "../pages/alekspages/clientsPage"
import * as creatClient from "../pages/alekspages/client-Create"
import * as editClient from "../pages/alekspages/client-EditPage"

import * as billPage from "../pages/alekspages/billsPage"
import * as creatBill from "../pages/alekspages/bill-Create"
import * as editBill from "../pages/alekspages/bill-Editpage"

import * as reservPage from"../pages/alekspages/reservPage"
import * as creatReserv from "../pages/alekspages/reserv-Create"
import * as editReserv from "../pages/alekspages/reserv-EditPage"


describe("Home Button", () => {

    it("Go to Rooms", () => {

        homeStartPage.viewRooms("Rooms")
        cy.wait(500)
        roomPage.roomCreatBtn("New Room")
        //cy.percySnapshot('Newroom-page')
        creatRoom.goHomePageRoom("Tester Hotel Overview")
        //cy.percySnapshot('Home-page')

        homeStartPage.viewRooms("Rooms")
        cy.wait(500)
        roomPage.roomsMenuEdt("Room")
        //cy.percySnapshot('Editroom-page')
        editRoom.goHomePageRoom("Tester Hotel Overview")
        //cy.percySnapshot('Home-page')
    
    })


    it("Go to Clients", () => {

        homeStartPage.viewClients("Clients")
        cy.wait(500)
        clientPage.clientCreatBtn("New Client")
        //cy.percySnapshot('Newclient-page')
        creatClient.goHomePageClient("Tester Hotel Overview")
        //cy.percySnapshot('Home-page')

        homeStartPage.viewClients("Clients")
        cy.wait(500)
        clientPage.clientsMenuEdt("Client")
        //cy.percySnapshot('Editclient-page')
        editClient.goHomePageClient("Tester Hotel Overview")
        //cy.percySnapshot('Home-page')

    })

    it("Go to Bills", () => {

        homeStartPage.viewBills("Bills")
        cy.wait(500)
        billPage.billCreatBtn("New Bill")
        //cy.percySnapshot('Creatbill-page')
        creatBill.goHomePageBill("Tester Hotel Overview")
        //cy.percySnapshot('Home-page')

        homeStartPage.viewBills("Bills")
        cy.wait(500)
        billPage.billsMenuEdt("Bill")
        //cy.percySnapshot('Editbill-page')
        editBill.goHomePageBill("Tester Hotel Overview")
        //cy.percySnapshot('Home-page')

    })

    it("Go to Resurvations", () => {

        homeStartPage.viewResurvations("Reservations")
        cy.wait(500)
        reservPage.reservCreatBtn("New Reservation")
        //cy.percySnapshot('New-page')
        cy.wait(1000)
        creatReserv.goHomePageReserv("Tester Hotel Overview")
        //cy.percySnapshot('Homereserv-page')
        cy.wait(1000)

        //homeStartPage.errorBTN("Tester Hotel Overview")

        homeStartPage.viewResurvations("Reservations")
        cy.wait(500)
        reservPage.reservsMenuEdt("Reservation")
        //cy.percySnapshot('Editreserv-page')
        editReserv.goHomePageReserv("Tester Hotel Overview")
        //cy.percySnapshot('Home-page')

    })

    afterEach("LoginPage", () => {
        
        homeStartPage.logoutUser("Login")
    })

})
