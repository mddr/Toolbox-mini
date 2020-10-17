import React, { FunctionComponent, useState } from 'react';
import { Button, Input } from '../shared/styled';
import { IconCirclePlus } from 'tabler-icons';
import styled from 'styled-components';

interface NewNoteProp {
  addNote: (content: string) => void;
}
export const NewNote: FunctionComponent<NewNoteProp> = ({ addNote }) => {
  const [content, setContent] = useState('');

  const onButtonClick = () => {
    addNote(content);
    setContent('');
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Note content..."
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <ButtonWithMargin disabled={!content} onClick={() => onButtonClick()}>
        <IconPlus size={24} />
        add new note
      </ButtonWithMargin>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ButtonWithMargin = styled(Button)`
  margin-left: 1rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const IconPlus = styled(IconCirclePlus)`
  margin-right: 0.5rem;
`;
