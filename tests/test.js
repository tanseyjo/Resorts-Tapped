module.exports = {
    beforeEach: browser => {
        browser.url('https://rta-staging.firebaseapp.com/#/sign-up/amFja3Nvbl9ob2xl')
    },
    after: browser => {
        browser.end()
    },
    //Test Resorts Tapped 
    'login': browser => {
        browser.setValue('input[placeholder="Email"]', 'qatesting@test.com')
            .setValue('input[placeholder="Password"]', '')
            .setValue('input[placeholder="Confirm Password"]', '123456')
            .click('button[class="button is-success"]')
    }
}



