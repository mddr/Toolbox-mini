import { getByTestId, getTestIdSelector } from '../support/commands';

describe('Board', () => {
  beforeEach(() => {
    cy.visit('board');
  });

  it('should display header and page name', () => {
    cy.assertHeaderVisible('board');
  });

  it('should support adding and removing tasks', () => {
    assertContainerTasksLength('to-do', 3);

    const newTaskContent = 'sample task content';
    getByTestId('add-new-task').type(`${newTaskContent}{enter}`);
    assertContainerTasksLength('to-do', 4)
      .last()
      .find(getTestIdSelector('delete-task-button'))
      .click();
    assertContainerTasksLength('to-do', 3);
  });

  it('should support multiple containers', () => {
    assertContainerTasksLength('done', 1);
    assertContainerTasksLength('in-progress', 0);
    assertContainerTasksLength('to-do', 3)
      .first()
      .find(getTestIdSelector('move-to-previous'))
      .should('be.disabled')
      .parent()
      .find(getTestIdSelector('move-to-next'))
      .should('not.be.disabled')
      .click();

    assertContainerTasksLength('to-do', 2);
    assertContainerTasksLength('in-progress', 1)
      .find(getTestIdSelector('move-to-previous'))
      .should('not.be.disabled')
      .parent()
      .find(getTestIdSelector('move-to-next'))
      .should('not.be.disabled')
      .click();

    assertContainerTasksLength('in-progress', 0);
    assertContainerTasksLength('done', 2)
      .first()
      .find(getTestIdSelector('move-to-next'))
      .should('be.disabled')
      .parent()
      .find(getTestIdSelector('move-to-previous'))
      .should('not.be.disabled')
      .click();

    assertContainerTasksLength('done', 1);
    assertContainerTasksLength('in-progress', 1)
      .find(getTestIdSelector('move-to-previous'))
      .should('not.be.disabled')
      .click();

    assertContainerTasksLength('in-progress', 0);
    assertContainerTasksLength('to-do', 3)
      .last()
      .find(getTestIdSelector('delete-task-button'))
      .click();
    assertContainerTasksLength('to-do', 2);
  });
});

type TaskContainers = 'to-do' | 'in-progress' | 'done';
const assertContainerTasksLength = (
  containerSuffix: TaskContainers,
  length: number
) => {
  return getByTestId(`task-container-${containerSuffix}`)
    .should('be.visible')
    .find(getTestIdSelector('task-', '^'))
    .should('have.length', length);
};
