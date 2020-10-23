import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { NoteType } from './notes.model';
import { BaseButton, DeleteIcon } from '../shared/styled';

interface NoteProps {
  note: NoteType;
  deleteNote: (id: string) => void;
}

export const Note: FunctionComponent<NoteProps> = ({ note, deleteNote }) => {
  return (
    <Wrapper data-test-id={'note'}>
      <ContentWrapper data-test-id={'note-content'}>
        {note.content}
      </ContentWrapper>
      <BaseButton
        data-test-id={'note-delete'}
        onClick={() => deleteNote(note.id)}
      >
        <DeleteIcon />
      </BaseButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--bg-gradient);
  box-shadow: var(--shadow-base);
  padding: 1rem 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  max-width: 80%;
`;
