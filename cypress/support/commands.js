import * as logOutData from '/cypress/fixtures/logOutData.json';
import * as loginData from '/cypress/fixtures/loginData.json';
import * as LoginLogoutPage from '/cypress/support/PageObject/LoginLogoutPage.js';
import * as UrlData from '/cypress/fixtures/urlData.json';
import * as apiData from '/cypress/fixtures/apiData.json';

Cypress.Commands.add('logOut', () => {
    cy.intercept(apiData.methodPOST, apiData.urlRequest).as(apiData.nameRequest);
    LoginLogoutPage.getBtnLogoutAndCheck().contains(logOutData.textBtnLogout).click();
    cy
      .wait(`@${apiData.nameRequest}`, { timeout: 60000 })
      .its('response.statusCode')
      .should('eq', apiData.statusCodeNumber);
    LoginLogoutPage.getBtnLoginAndCheck().contains(logOutData.textBtnLogin);
    cy.checkUrl(UrlData.baseUrl);
    LoginLogoutPage.getTextTitleHomePage().contains(loginData.textTitleHomePage)
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

Cypress.Commands.add('checkUrl', (url) => {
    cy
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
