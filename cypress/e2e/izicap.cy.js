import * as HomePage from '/cypress/support/PageObject/HomePage.js';
import * as SignUpPage from '/cypress/support/PageObject/SignUpPage.js';
import * as LoginPage from '/cypress/support/PageObject/LoginPage.js';
import * as CreateHeroPage from '/cypress/support/PageObject/CreateHeroPage.js';
import * as DeleteHeroPage from '/cypress/support/PageObject/DeleteHeroPage.js';
import * as UrlData from '/cypress/fixtures/urlData.json';
import * as apiData from '/cypress/fixtures/apiData.json';

describe('Register an account - Login - Cretate Hero - Delete Hero', () => {

  before(() => {
    cy.clearCookiesSession();
    cy.navigateToPageAndCheckUrl(UrlData.baseUrl);
  })

  beforeEach(() => {
    cy.preserveCookiesSession();
  })

  const rdmvalue = () => Cypress._.random(0, 1e6);
  const rdmValueString = rdmvalue();
  const emailSIgnUp = 'email' + rdmvalue() + '@testqa.com';
  const passwordSignUp = `Password${rdmValueString}`;
  const firstName = `FirstName${rdmValueString}`;
  const lastName = `FirstName${rdmValueString}`;
  const nameHero = `NameHero${rdmValueString}`;
  const alterEgoHero = `NameHero${rdmValueString}`;

  it('Should visit homepage', () => {
    cy.intercept(apiData.methodPOST, apiData.urlRequest).as(apiData.nameRequest);
    HomePage.getAndCheckTitleHomePage();
    cy
    .wait(`@${apiData.nameRequest}`, { timeout: 60000 })
    .its('response.statusCode')
    .should('eq', 200);
    HomePage.getAndCheckHerosCard();
    HomePage.getBtnSignUpTopBar().click();
  })

  it('Should register an account', () => {
    cy.intercept(apiData.methodPOST, apiData.urlRequest).as(apiData.nameRequest);
    cy.url().should('include',UrlData.urlSignUp);
    SignUpPage.getTitlePageSignUp();
    SignUpPage.getInputFirstName().type(firstName).should('have.value', firstName);
    SignUpPage.getInputLastName().type(lastName).should('have.value', lastName);
    SignUpPage.getInputEmail().type(emailSIgnUp).should('have.value', emailSIgnUp);
    SignUpPage.getInputPassword().type(passwordSignUp).should('have.value', passwordSignUp);
    SignUpPage.getWordingInputPassword();
    SignUpPage.getBtnValidateSignUp().click();
    cy
    .wait(`@${apiData.nameRequest}`, { timeout: 60000 })
    .its('response.statusCode')
    .should('eq', 200);
    cy.url().should('include',UrlData.urlLogin);
    SignUpPage.getWordingSignUpComplete();
  })

  it('Should Login with the created user ', () => {
    cy.intercept(apiData.methodPOST, apiData.urlRequest).as(apiData.nameRequest);
    LoginPage.getAndCheckTitleLoginPage();
    LoginPage.getInputEmail().type(emailSIgnUp).should('have.value', emailSIgnUp);
    LoginPage.getInputPassword().type(passwordSignUp).should('have.value', passwordSignUp);
    LoginPage.getAndCheckWordingPassword();
    LoginPage.getBtnLogin().click();
    cy
    .wait(`@${apiData.nameRequest}`, { timeout: 60000 })
    .its('response.statusCode')
    .should('eq', 200);
    cy.url().should('include', UrlData.urlMyHeroes)
    LoginPage.getWordingLoginComplete();
  })
  
  it('Should create a new hero', () => {
    cy.intercept(apiData.methodPOST, apiData.urlRequest).as(apiData.nameRequest);
    CreateHeroPage.getAndCheckTitleCreateHeroPage();
    CreateHeroPage.getAndCheckTitleForm();
    CreateHeroPage.getAndCheckWodingNoheroCreated();
    CreateHeroPage.getInputNameHero().type(nameHero).should('have.value', nameHero);
    CreateHeroPage.getInputAlterEgo().type(alterEgoHero).should('have.value', alterEgoHero);
    CreateHeroPage.getBtnValidateCreatedHero().click();
    cy
    .wait(`@${apiData.nameRequest}`, { timeout: 60000 })
    .its('response.statusCode')
    .should('eq', 200);
    CreateHeroPage.getWordingHeroCreated();
  })

  it('Should delete a hero', () => {
    cy.intercept(apiData.methodPOST, apiData.urlRequest).as(apiData.nameRequest);
    DeleteHeroPage.getAndCheckHeroList().contains(alterEgoHero);
    DeleteHeroPage.getAndCheckHeroList().contains(nameHero);
    DeleteHeroPage.getBtnTrash().click();
    DeleteHeroPage.getTitlePopUpDeleteHero();
    DeleteHeroPage.getTitleConfirmDelete();
    DeleteHeroPage.getBtnNo();
    DeleteHeroPage.getBtnYes().click();
    cy
    .wait(`@${apiData.nameRequest}`, { timeout: 60000 })
    .its('response.statusCode')
    .should('eq', 200);
  })

  it('Should log out user', () => {
    cy.logOut();
  })
})