import * as HeroesData from '/cypress/fixtures/heroesData.json';

export const getAndCheckTitleCreateHeroPage = () => cy.get('#left > .header__title').should('be.visible').contains(HeroesData.titleTextMyHeroPage);

export const getAndCheckTitleForm = () => cy.get('#right > :nth-child(1)').should('be.visible').contains(HeroesData.titleTextCreateHeroPage);

export const getAndCheckWodingNoheroCreated = () => cy.get('.my-heroes__no-heroes--message').should('be.visible').contains(HeroesData.wordingNoHeroesYet);

export const getInputNameHero = () => cy.get('#mat-input-7').should('be.visible');

export const getInputAlterEgo = () => cy.get('#mat-input-8').should('be.visible');

export const getBtnValidateCreatedHero = () => cy.get('#right >> form > button').should('be.visible');

export const getWordingHeroCreated = () => cy.get('.mat-simple-snack-bar-content').should('be.visible').contains(HeroesData.WordingValidateCreatedHero);