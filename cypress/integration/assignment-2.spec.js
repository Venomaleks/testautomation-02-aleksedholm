//Aleks
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


var faker = require('faker')

let randomCategory = faker.random.arrayElement(['single','double','twin'])
let randomFeatcher = faker.random.arrayElement(['balcony', 'ensuite', 'sea_view', 'penthouse'])
let randomNumber = faker.datatype.number(1000)
let randomFloor = faker.datatype.number(100)
let randomPrice = faker.datatype.number(1000000000)

describe("Home Button in the pages and creat a room", () => {
    
    beforeEach("LoginPage", () => {
        
        loginPage.checkLoginPageTitle("Login")
        loginPage.performValideLogin("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    })

    it("Go to Rooms", () => {

        
        homeStartPage.viewRooms("Rooms")
        cy.wait(500)
        cy.percySnapshot('Rooms-page')
        cy.wait(500)
        roomPage.roomCreatBtn("New Room")
        cy.percySnapshot('Newroom-page')
        creatRoom.goHomePageRoom("Tester Hotel Overview")
        cy.percySnapshot('Home-page')

        homeStartPage.viewRooms("Rooms")
        cy.wait(500)
        roomPage.roomsMenuEdt("Room")
        cy.percySnapshot('Editroom-page')
        editRoom.goHomePageRoom("Tester Hotel Overview")
        
    
    })

    it("Room Creat", () => {

        homeStartPage.viewRooms("Rooms")
        cy.wait(500)
        roomPage.roomCreatBtn("New Room")
        cy.percySnapshot('Newroom-page-beforeNewroom')

        creatRoom.fillInFormRoom( randomCategory, randomNumber, randomFloor, randomPrice, [randomFeatcher])
        cy.percySnapshot('NewroomInputs-page')
        creatRoom.roomSave("Rooms")

        roomPage.verifyLastRoom(randomCategory , randomNumber, randomFloor, randomPrice, [randomFeatcher])
        cy.percySnapshot('NewroomInList-page-afterNewroom')

        creatRoom.goHomePageRoom("Tester Hotel Overview")

    })

    it("Go to Clients", () => {

        homeStartPage.viewClients("Clients")
        cy.wait(500)
        clientPage.clientCreatBtn("New Client")
        cy.percySnapshot('Newclient-page')
        creatClient.goHomePageClient("Tester Hotel Overview")

        homeStartPage.viewClients("Clients")
        cy.wait(500)
        clientPage.clientsMenuEdt("Client")
        cy.percySnapshot('Editclient-page')
        editClient.goHomePageClient("Tester Hotel Overview")
        

    })

    it("Go to Bills", () => {

        homeStartPage.viewBills("Bills")
        cy.wait(500)
        billPage.billCreatBtn("New Bill")
        cy.percySnapshot('Creatbill-page')
        creatBill.goHomePageBill("Tester Hotel Overview")

        homeStartPage.viewBills("Bills")
        cy.wait(500)
        billPage.billsMenuEdt("Bill")
        cy.percySnapshot('Editbill-page')
        editBill.goHomePageBill("Tester Hotel Overview")
       

    })

    it("Go to Resurvations", () => {

        homeStartPage.viewResurvations("Reservations")
        cy.wait(500)
        reservPage.reservCreatBtn("New Reservation")
        cy.percySnapshot('New-page')
        cy.wait(1000)
        creatReserv.goHomePageReserv("Tester Hotel Overview")
        cy.percySnapshot('Homereserv-page')
        cy.wait(1000)

        //homeStartPage.errorBTN("Tester Hotel Overview") // in emergensy

        homeStartPage.viewResurvations("Reservations")
        cy.wait(500)
        reservPage.reservsMenuEdt("Reservation")
        cy.percySnapshot('Editreserv-page')
        editReserv.goHomePageReserv("Tester Hotel Overview")

    })

    afterEach("LoginPage", () => {
        
        homeStartPage.logoutUser("Login")
    })

})