import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
}

export const Card: FunctionComponent<CardProps> = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

const StyledCard = styled.div`
  padding: 5rem;
  background: var(--bg-gradient);
  box-shadow: var(--shadow-base);
  border-radius: 2rem;
`;
