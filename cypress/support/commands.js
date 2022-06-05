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

Cypress.Commands.add('logOut', () => {
    cy.get('body > app-root > div > app-header > header > nav > div > div:nth-child(1) > a:nth-child(3)').should('be.visible').contains('Log out').click();
    cy.get('[href="/angular-example-app/auth/log-in"]').should('be.visible').contains('Log In');
    cy.get('.header__title').should('be.visible').contains('Heroes published')
})

Cypress.Commands.add('preserveCookiesSession', () => {
    Cypress.Cookies.preserveOnce('accessToken','refreshToken');
})

Cypress.Commands.add('clearCookiesSession', () => {
    cy.clearCookies();
})

Cypress.Commands.add('navigateToPageAndCheckUrl', (url) => {
    cy
      .visit(url || '')
      .url()
      .should('contain', url);
})

Cypress.Commands.add('interceptRequest', (method, url, name) => {
    cy.intercept(method, url).as(name);
})

Cypress.Commands.add('waitAndCheckRequestResponse', (name, statuscode) => {
    cy
      .wait(`@${name}`, { timeout: 60000 })
      .its('response.statusCode')
      .should('eq', statuscode);
})
