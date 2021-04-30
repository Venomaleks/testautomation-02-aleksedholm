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

        roomCreatPage.fillInFormRoom(randomCategory, randomNumber, randomFloor, randomPrice, [randomFeatcher])
        
        roomCreatPage.roomSave("Rooms")

        roomsPage.verifyLastRoom(randomCategory , randomNumber, randomFloor, randomPrice, [randomFeatcher])
        
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