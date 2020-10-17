import React, { FunctionComponent } from 'react';
import { TaskType } from './board.model';
import styled from 'styled-components';
import { IconChevronLeft, IconChevronRight } from 'tabler-icons';
import { BaseButton, DeleteIcon } from '../shared/styled';

interface TaskProps {
  task: TaskType;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  moveToPrevious: (id: string) => void;
  moveToNext: (id: string) => void;
  deleteTask: (id: string) => void;
}
export const Task: FunctionComponent<TaskProps> = (props) => {
  return (
    <Wrapper>
      <Id>{props.task.id}</Id>

      <Arrows>
        <ArrowButton
          disabled={props.isPreviousDisabled}
          onClick={() => props.moveToPrevious(props.task.id)}
        >
          <IconChevronLeft size={iconSize} color={arrowColor} />
        </ArrowButton>

        <ArrowButton
          disabled={props.isNextDisabled}
          onClick={() => props.moveToNext(props.task.id)}
        >
          <IconChevronRight size={iconSize} color={arrowColor} />
        </ArrowButton>
      </Arrows>

      <Content>{props.task.content}</Content>

      <BaseButton onClick={() => props.deleteTask(props.task.id)}>
        <DeleteIcon />
      </BaseButton>
    </Wrapper>
  );
};

const iconSize = 24;
const arrowColor = 'var(--accent)';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem;
  padding-bottom: 2rem;
`;

const Id = styled.span`
  text-transform: uppercase;
`;
const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ArrowButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Content = styled.p``;
