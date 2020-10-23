import { getByTestId } from '../support/commands';

describe('App', () => {
  beforeEach(() => {
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
});
