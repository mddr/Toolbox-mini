import React, { useState } from 'react';
import styled from 'styled-components';

import { ViewWrapper } from '../shared/styled';
import { TaskType } from './board.model';
import { doneMock, todoMock } from './board.mock';
import { Tasks } from './Tasks';

export function Board() {
  const [todo, setTodo] = useState<TaskType[]>(todoMock);
  const [inProgress, setInProgress] = useState<TaskType[]>([]);
  const [done, setDone] = useState<TaskType[]>(doneMock);

  const deleteTask = (
    tasks: TaskType[],
    handler: React.Dispatch<TaskType[]>
  ) => {
    console.log('create new func');
    return (id: string) => {
      console.log('deleteTask', { id });
      const newTasks = tasks.filter((t) => t.id !== id);
      handler(newTasks);
    };
  };

  const moveTask = (
    from: TaskType[],
    fromHandler: React.Dispatch<TaskType[]>,
    to: TaskType[],
    toHandler: React.Dispatch<TaskType[]>
  ) => {
    return (id: string) => {
      const existing = from.find((f) => f.id === id);
      if (!existing) {
        return;
      }
      fromHandler(from.filter((f) => f.id !== id));
      toHandler([...to, existing]);
    };
  };

  const addTask = (to: TaskType[], toHandler: React.Dispatch<TaskType[]>) => {
    return (content: string) => {
      const id = `id-${to.length + 100}`;
      toHandler([...to, { id, content }]);
    };
  };

  return (
    <BoardsWrapper>
      <Tasks
        label="to do"
        tasks={todo}
        deleteTask={deleteTask(todo, setTodo)}
        isNextDisabled={false}
        moveToNext={moveTask(todo, setTodo, inProgress, setInProgress)}
        isPreviousDisabled={true}
        moveToPrevious={() => {}}
        isAddingDisabled={false}
        addTask={addTask(todo, setTodo)}
      />
      <Tasks
        label="in progress"
        tasks={inProgress}
        deleteTask={deleteTask(inProgress, setInProgress)}
        isNextDisabled={false}
        moveToNext={moveTask(inProgress, setInProgress, done, setDone)}
        isPreviousDisabled={false}
        moveToPrevious={moveTask(inProgress, setInProgress, todo, setTodo)}
        isAddingDisabled={true}
        addTask={() => {}}
      />
      <Tasks
        label="done"
        tasks={done}
        deleteTask={deleteTask(done, setDone)}
        isNextDisabled={true}
        moveToNext={() => {}}
        isPreviousDisabled={false}
        moveToPrevious={moveTask(done, setDone, inProgress, setInProgress)}
        isAddingDisabled={true}
        addTask={() => {}}
      />
    </BoardsWrapper>
  );
}

const BoardsWrapper = styled(ViewWrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;
