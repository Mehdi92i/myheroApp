export const getAndCheckTitleHomePage = () => cy.get('.header__title').should('be.visible').contains('Heroes published');

export const getAndCheckHerosCard = () => cy.get('.mat-card').should('be.visible');

export const getBtnSignUpTopBar = () => cy.get('[href="/angular-example-app/auth/sign-up"]').should('be.visible');



