export const getAndCheckHeroList = () => cy.get('.mat-list-item-content').should('be.visible');

export const getBtnTrash = () => cy.get('.hero-actions > .mat-icon').should('be.visible');

export const getTitlePopUpDeleteHero = () =>  cy.get(`[class="mat-dialog-title"]`).should('be.visible').contains('Delete hero');

export const getTitleConfirmDelete = () => cy.get(`[class="mat-dialog-content"]`).should('be.visible').contains('Are you sure?');

export const getBtnNo = () => cy.get(`[aria-label="no button"]`).should('be.visible').contains('No');

export const getBtnYes = () => cy.get(`[aria-label="yes button"]`).should('be.visible').contains('Yes');
