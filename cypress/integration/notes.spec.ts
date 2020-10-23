import { getByTestId, getTestIdSelector } from '../support/commands';

describe('Notes', () => {
  beforeEach(() => {
    cy.visit('notes');
  });

  it('should display header and page name', () => {
    cy.assertHeaderVisible('notes');
  });

  it('should render a message and disabled button when list is empty ', () => {
    getByTestId('add-note').should('be.disabled');
    getByTestId('empty-message').should('be.visible');
  });

  it('should allow to freely add and remove messages', () => {
    const noteContent = 'sample note content';

    getByTestId('new-note-input').type(noteContent);
    getByTestId('add-note').should('not.be.disabled').click();

    getByTestId('note')
      .should('have.length', 1)
      .children(getTestIdSelector('note-content'))
      .should('contain', noteContent)
      .parent()
      .children(getTestIdSelector('note-delete'))
      .click();

    getByTestId('note').should('have.length', 0);
    getByTestId('add-note').should('be.disabled');
  });
});
