//aleks Done

/// <reference types ="cypress" />

import * as loginPage from "../../pages/alekspages/start-LogPage"
import * as homeStartPage from "../../pages/alekspages/home-StartPage"
import * as roomsPage from "../../pages/alekspages/roomsPage"
import * as roomCreatPage from "../../pages/alekspages/room-Create"


var faker = require('faker')

let randomNumber = faker.number.numberInput()
let randomFloor = faker.number.floorInput();
let randomPrice = faker.number.riceInput();



describe("Go to rooms Creat", () => {

    // test case 3
    beforeEach("LoginPage", () => {
        
        loginPage.checkLoginPageTitle("Login")
        loginPage.performValideLogin("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    })
    
    it.only("Rooms Creat Save", () => {

        
        homeStartPage.viewRooms("Rooms")
        roomsPage.roomCreatBtn("Room")

        roomCreatPage.fillInForm('twin' , "7", "13", "4886", ['balcony', 'ensuite', 'sea_view']) // 'balcony', 'ensuite', 'sea_view', 'penthouse'
        
        roomCreatPage.roomSave("Rooms")

        roomsPage.verifyLastRoom('twin' , "7", "13", "true" ,  "4886", ['balcony', 'ensuite', 'sea_view']) // 'balcony', 'ensuite', 'sea_view', 'penthouse'
        roomsPage.roomsBackBtn("Tester Hotel Overview")
    })

    it("Rooms Creat Back", () => {

        homeStartPage.viewRooms("Rooms")
        roomsPage.roomCreatBtn("Room")
       
        roomCreatPage.fillInForm('double' , "7", "13", "4886", 'balcony')

        roomCreatPage.roomBack()
        roomsPage.roomsBackBtn("Tester Hotel Overview")
    })
/*
    after("Logout", () => {

        roomsPage.logoutUser("Login")
    })
*/
})
