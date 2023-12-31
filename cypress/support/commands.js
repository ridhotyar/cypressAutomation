// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => 
{
    cy.session([username, password], () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title('OrangeHRM')
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()  
    },
    {
        cacheAcrossSpecs: true
    })
})

Cypress.Commands.add('logoutweb', () => 
{
    cy.get('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.get('h5.oxd-text.oxd-text--h5.orangehrm-login-title').contains("Login")
})