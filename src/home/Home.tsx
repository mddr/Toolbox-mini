import React from 'react';
import { IconListCheck, IconNotes } from 'tabler-icons';
import styled from 'styled-components';
import { Card } from './Card';
import { Link } from 'react-router-dom';

const iconSize = 100;
const iconColor = '#f2f2f2';
const strokeWidth = 1.5;

export function Home() {
  return (
    <HomeGrid>
      <NotesWrapper>
        <Card>
          <StyledLink to="/notes">
            <IconNotes
              size={iconSize}
              stroke={iconColor}
              strokeWidth={strokeWidth}
            />
            <span>notes</span>
          </StyledLink>
        </Card>
      </NotesWrapper>

      <BoardWrapper>
        <Card>
          <StyledLink to="/board">
            <IconListCheck
              size={iconSize}
              stroke={iconColor}
              strokeWidth={strokeWidth}
            />
            <span>boards</span>
          </StyledLink>
        </Card>
      </BoardWrapper>
    </HomeGrid>
  );
}

const HomeGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 0.7fr 1fr 1fr 0.7fr;
  margin-top: 5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--fg);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotesWrapper = styled.div`
  grid-column: 2/3;
`;

const BoardWrapper = styled.div`
  grid-column: 3/4;
`;
