export const getAndCheckTitleCreateHeroPage = () => cy.get('#left > .header__title').should('be.visible').contains('My heroes');

export const getAndCheckTitleForm = () => cy.get('#right > :nth-child(1)').should('be.visible').contains('Create a hero');

export const getAndCheckWodingNoheroCreated = () => cy.get('.my-heroes__no-heroes--message').should('be.visible').contains('No heroes yet, try to create one in the right side!');

export const getInputNameHero = () => cy.get('#mat-input-7').should('be.visible');

export const getInputAlterEgo = () => cy.get('#mat-input-8').should('be.visible');

export const getBtnValidateCreatedHero = () => cy.get('#right >> form > button').should('be.visible');

export const getWordingHeroCreated = () => cy.get('.mat-simple-snack-bar-content').should('be.visible').contains('Hero created');