export const getTitlePageSignUp = () =>  cy.get('.signup--form__header-title').should('be.visible').contains('Give it a try!');

export const getInputFirstName = () =>  cy.get('#mat-input-1').should('be.visible');

export const getInputLastName = () =>  cy.get('#mat-input-2').should('be.visible');

export const getInputEmail = () =>  cy.get('#mat-input-3').should('be.visible');

export const getInputPassword = () =>  cy.get('#mat-input-4').should('be.visible');

export const getWordingInputPassword = () =>  cy.get('#mat-hint-0').should('be.visible').contains('Must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number');

export const getBtnValidateSignUp = () =>  cy.get(':nth-child(5) > .mat-focus-indicator').should('be.visible');

export const getWordingSignUpComplete = () =>  cy.get('.mat-simple-snackbar').should('be.visible').contains('Cool! Now try to log in!');


