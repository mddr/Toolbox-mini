import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { TaskType } from './board.model';
import { Task } from './Task';
import { Input } from '../shared/styled';

interface TasksProps {
  label: string;
  tasks: TaskType[];
  deleteTask: (id: string) => void;
  moveToNext: (id: string) => void;
  isNextDisabled: boolean;
  moveToPrevious: (id: string) => void;
  isPreviousDisabled: boolean;

  isAddingDisabled: boolean;
  addTask: (content: string) => void;
}

export const Tasks: FunctionComponent<TasksProps> = (props) => {
  const [content, setContent] = useState('');

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (content && e.key === 'Enter') {
      props.addTask(content);
      setContent('');
    }
  };

  return (
    <Wrapper>
      <Header>{props.label}</Header>

      <TasksWrapper>
        {props.tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              isPreviousDisabled={props.isPreviousDisabled}
              isNextDisabled={props.isNextDisabled}
              deleteTask={props.deleteTask}
              moveToPrevious={props.moveToPrevious}
              moveToNext={props.moveToNext}
            />
          );
        })}

        {props.isAddingDisabled ? (
          ''
        ) : (
          <Input
            type="text"
            placeholder={'Add new note...'}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={(e) => onKeyPress(e)}
          />
        )}
      </TasksWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 2rem;
  background: var(--bg-gradient);
  box-shadow: var(--shadow-base);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  border-radius: 2rem 2rem 0 0;
  text-align: center;
  background: var(--bg-gradient);
  box-shadow: var(--shadow-base);
`;

const TasksWrapper = styled.div`
  padding: 2rem;
`;
