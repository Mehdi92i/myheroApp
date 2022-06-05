import * as HomePageData from '/cypress/fixtures/homePageData.json';

export const getAndCheckTitleHomePage = () => cy.get('.header__title').should('be.visible').contains(HomePageData.textHomePageTitle);

export const getAndCheckHerosCard = () => cy.get('.mat-card').should('be.visible');

export const getBtnSignUpTopBar = () => cy.get('[href="/angular-example-app/auth/sign-up"]').should('be.visible');



