accountPage = {}
module.exports = {
    beforeEach: browser => {
        accountPage = browser.page.accountCreation()
        accountPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    //Test Resorts Tapped 
    'login': browser => {
        accountPage
        .setValue('@emailEntryLine','qatesting4@test.com')
             .setValue('@passwordEntry', '123456')
            .setValue('@passwordConfirm', '123456')
            .click('@submitButton')
            .waitForElementPresent('@header', 10000 )
            .waitForElementVisible('@logOut', 10000)
            .click('@logOut')
    }
}



