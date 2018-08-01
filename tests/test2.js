loginPage = {}

module.exports = {
    beforeEach: browser => {
        loginPage = browser.page.login()
        loginPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    //Test Resorts Tapped 
    'login': browser => {
        loginPage
        .setValue('@emailEntryLine','qatesting4@test.com')
            .setValue('@passwordEntry', '123456')
             .click('@loginButton')
            .waitForElementPresent('@header', 10000 )
            .click('@logOut')
    }
}
