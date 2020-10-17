import React, { FunctionComponent } from 'react';

import { NoteType } from '../app.models';
import styled from 'styled-components';
import { IconTrash } from 'tabler-icons';

interface NoteProps {
  note: NoteType;
  deleteNote: (id: string) => void;
}

export const Note: FunctionComponent<NoteProps> = ({ note, deleteNote }) => {
  return (
    <Wrapper>
      <ContentWrapper>{note.content}</ContentWrapper>
      <DeleteIcon onClick={() => deleteNote(note.id)} />
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

const DeleteIcon = styled(IconTrash)`
  color: var(--warn);
  cursor: pointer;
`;
