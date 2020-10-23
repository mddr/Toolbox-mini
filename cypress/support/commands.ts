// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      assertHeaderVisible(pathName?: string): void;
      matchImageSnapshot(): void;
    }
  }
}

type CssAttributeModifier = '' | '~' | '|' | '^' | '$' | '*';
export const getTestIdSelector = (
  id: string,
  modifier: CssAttributeModifier = ''
) => `[data-test-id${modifier}=${id}]`;

export const getByTestId = (id: string, modifier: CssAttributeModifier = '') =>
  cy.get(getTestIdSelector(id, modifier));

const assertHeaderVisible = (pathName: string = '') => {
  getByTestId('theme-switch').should('be.visible');
  getByTestId('home-link').should('be.visible').and('contain', 'toolbox');
  getByTestId('path-name').should('be.visible').and('contain', pathName);
};
Cypress.Commands.add('assertHeaderVisible', assertHeaderVisible);

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();
