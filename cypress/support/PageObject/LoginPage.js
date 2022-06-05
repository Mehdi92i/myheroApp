import * as LoginPageData from '/cypress/fixtures/loginData.json';

export const getAndCheckTitleLoginPage = () => cy.get('.login--form__header-title').should('be.visible').contains(LoginPageData.textTitleLoginPage);

export const getInputEmail = () => cy.get('#mat-input-5').should('be.visible');

export const getInputPassword = () => cy.get('#mat-input-6').should('be.visible');

export const getAndCheckWordingPassword = () => cy.get('#mat-hint-1').should('be.visible').contains(LoginPageData.wordingTextRequirmentPassword);

export const getBtnLogin = () => cy.get(':nth-child(3) > .mat-focus-indicator').should('be.visible');

export const getWordingLoginComplete = () => cy.get('.mat-simple-snack-bar-content').should('be.visible').contains(`Nice! Let's create some heroes`);





