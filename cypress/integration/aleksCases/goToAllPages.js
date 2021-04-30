// aleks Done
/// <reference types ="cypress" />

import * as loginPage from "../../pages/alekspages/start-LogPage"
import * as homeStartPage from "../../pages/alekspages/home-StartPage"

describe("Go to all pages", () => {


// test case 2

    beforeEach("LoginPage", () => {
        
        loginPage.checkLoginPageTitle("Login")
        loginPage.performValideLogin("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    })

    it("Go to Rooms", () => {

        homeStartPage.viewRooms("Rooms")

    })

    it("Go to Clients", () => {

        homeStartPage.viewClients("Clients")
    
    })

    it("Go to Bills", () => {

        homeStartPage.viewBills("Bills")
    
    })

    it("Go to Resurvations", () => {

        homeStartPage.viewResurvations("Reservations")
    
    })

    afterEach("LoginPage", () => {
        
        homeStartPage.logoutUser("Login")
    })

});