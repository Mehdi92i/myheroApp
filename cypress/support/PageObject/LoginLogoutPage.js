import * as LoginLogoutPageData from '/cypress/fixtures/loginData.json';

export const getAndCheckTitleLoginPage = () => cy.get('.login--form__header-title').should('be.visible').contains(LoginLogoutPageData.textTitleLoginPage);

export const getInputEmail = () => cy.get('#mat-input-5').should('be.visible');

export const getInputPassword = () => cy.get('#mat-input-6').should('be.visible');

export const getAndCheckWordingPassword = () => cy.get('#mat-hint-1').should('be.visible').contains(LoginLogoutPageData.wordingTextRequirmentPassword);

export const getBtnLogin = () => cy.get(':nth-child(3) > .mat-focus-indicator').should('be.visible');

export const getWordingLoginComplete = () => cy.get('.mat-simple-snack-bar-content').should('be.visible').contains(`Nice! Let's create some heroes`);

export const getBtnLogoutAndCheck = () => cy.get('body > app-root > div > app-header > header > nav > div > div:nth-child(1) > a:nth-child(3)').should('be.visible');

export const getBtnLoginAndCheck = () => cy.get('[href="/angular-example-app/auth/log-in"]').should('be.visible');

export const getTextTitle = () => cy.get('.header__title');

export const getTextTitleHomePage = () => cy.get('.header__title').should('be.visible');



