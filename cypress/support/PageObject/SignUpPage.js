import * as SignUpData from '/cypress/fixtures/signUpData.json';

export const getTitlePageSignUp = () =>  cy.get('.signup--form__header-title').should('be.visible').contains(SignUpData.titleTextPageSignUp);

export const getInputFirstName = () =>  cy.get('#mat-input-1').should('be.visible');

export const getInputLastName = () =>  cy.get('#mat-input-2').should('be.visible');

export const getInputEmail = () =>  cy.get('#mat-input-3').should('be.visible');

export const getInputPassword = () =>  cy.get('#mat-input-4').should('be.visible');

export const getWordingInputPassword = () =>  cy.get('#mat-hint-0').should('be.visible').contains(SignUpData.TextWordingInputPassword);

export const getBtnValidateSignUp = () =>  cy.get(':nth-child(5) > .mat-focus-indicator').should('be.visible');

export const getWordingSignUpComplete = () =>  cy.get('.mat-simple-snackbar').should('be.visible').contains(SignUpData.TextWordingSignUpComplete);


