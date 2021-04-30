// aleks Done
/// <reference types ="cypress" />

import * as loginPage from "../../pages/alekspages/start-LogPage"
import * as homeStartPage from "../../pages/alekspages/home-StartPage"

describe("Login user / Logout user", () => {

    // test case 1
    beforeEach("LoginPage", () => {
        
        loginPage.checkLoginPageTitle("Login")
        loginPage.performValideLogin("tester01", "GteteqbQQgSr88SwNExUQv2ydb7xuf8c", "Tester Hotel Overview")
    })
        
    after("Logout", () => {

        homeStartPage.logoutUser("Login")
    })

})
