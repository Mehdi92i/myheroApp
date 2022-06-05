import * as HomePage from '/cypress/support//PageObject/HomePage.js';
import * as SignUpPage from '/cypress/support//PageObject/SignUpPage.js';
import * as LoginPage from '/cypress/support//PageObject/LoginPage.js';
import * as CreateHeroPage from '/cypress/support//PageObject/CreateHeroPage.js';
import * as DeleteHeroPage from '/cypress/support//PageObject/DeleteHeroPage.js';
import { logOutUser } from '../support/commands';

describe('izicap.cy.js', () => {

  before(() => {
    cy.clearCookies();
    cy.visit('https://ismaestro.github.io/angular-example-app/');
    cy.url().should('include','https://ismaestro.github.io/angular-example-app/');
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('accessToken','refreshToken');
  })

  const rdmvalue = () => Cypress._.random(0, 1e6);
  const rdmValueString = rdmvalue();
  const emailSIgnUp = 'email' + rdmvalue() + '@testqa.com';
  const passwordSignUp = `Password${rdmValueString}`;
  const firstName = `FirstName${rdmValueString}`;
  const lastName = `FirstName${rdmValueString}`;
  const nameHero = `NameHero${rdmValueString}`;
  const alterEgoHero = `NameHero${rdmValueString}`;

  it('should visit homepage', () => {
    HomePage.getAndCheckTitleHomePage();
    HomePage.getAndCheckHerosCard();
    HomePage.getBtnSignUpTopBar().click();
  })

  it('register on the site', () => {
    SignUpPage.getTitlePageSignUp();
    SignUpPage.getInputFirstName().type(firstName).should('have.value', firstName);
    SignUpPage.getInputLastName().type(lastName).should('have.value', lastName);
    SignUpPage.getInputEmail().type(emailSIgnUp).should('have.value', emailSIgnUp);
    SignUpPage.getInputPassword().type(passwordSignUp).should('have.value', passwordSignUp);
    SignUpPage.getWordingInputPassword();
    SignUpPage.getBtnValidateSignUp().click();
    cy.url().should('include','https://ismaestro.github.io/angular-example-app/auth/log-in');
    SignUpPage.getWordingSignUpComplete();
  })

  it('Login with the created user ', () => {
    LoginPage.getAndCheckTitleLoginPage();
    LoginPage.getInputEmail().type(emailSIgnUp).should('have.value', emailSIgnUp);
    LoginPage.getInputPassword().type(passwordSignUp).should('have.value', passwordSignUp);
    LoginPage.getAndCheckWordingPassword();
    LoginPage.getBtnLogin().click();
    cy.url().should('include', 'https://ismaestro.github.io/angular-example-app/hero/my-heroes')
    LoginPage.getWordingLoginComplete();
  })
  
  it('create a new hero', () => {
    CreateHeroPage.getAndCheckTitleCreateHeroPage();
    CreateHeroPage.getAndCheckTitleForm();
    CreateHeroPage.getAndCheckWodingNoheroCreated();
    CreateHeroPage.getInputNameHero().type(nameHero).should('have.value', nameHero);
    CreateHeroPage.getInputAlterEgo().type(alterEgoHero).should('have.value', alterEgoHero);
    CreateHeroPage.getBtnValidateCreatedHero().click();
    CreateHeroPage.getWordingHeroCreated();
  })

  it('delete a hero', () => {
    DeleteHeroPage.getAndCheckHeroList().contains(alterEgoHero);
    DeleteHeroPage.getAndCheckHeroList().contains(nameHero);
    DeleteHeroPage.getBtnTrash().click();
    DeleteHeroPage.getTitlePopUpDeleteHero();
    DeleteHeroPage.getTitleConfirmDelete();
    DeleteHeroPage.getBtnNo();
    DeleteHeroPage.getBtnYes().click();
  })

  it('log out user', () => {
    cy.logout();
  })
})