import { getByTestId } from '../support/commands';

describe('App', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('example.json').as('exampleJSON');
    cy.route('GET', '/test', '@exampleJSON').as('dummy');

    cy.visit('');
  });

  it('should be initialized with dark theme', () => {
    getByTestId('app-container').should('not.have.class', 'light-theme');
  });

  it('should support multiple themes', () => {
    getByTestId('app-container').should('not.have.class', 'light-theme');

    getByTestId('theme-switch').click();
    getByTestId('app-container').should('have.class', 'light-theme');

    getByTestId('theme-switch').click();
    getByTestId('app-container').should('not.have.class', 'light-theme');
  });

  it('should display app header and name', () => {
    cy.assertHeaderVisible();
  });

  it('should allow to navigate to all available pages from UI', () => {
    getByTestId('route-link-', '^').should('have.length', 2).first().click();
    cy.url().should('contain', 'notes');

    cy.visit('');
    getByTestId('route-link-board').click();
    cy.url().should('contain', 'board');

    getByTestId('home-link').click();
    cy.url().should('match', /\/$/);
  });

  it('should wait', () => {
    cy.wait('@dummy').its('response.body').should('deep.equal', {
      name: 'Using fixtures to represent data',
      email: 'hello@cypress.io',
      body: 'Fixtures are a great way to mock data for responses to routes',
    });
  });
});
