import React from 'react';
import styled from 'styled-components';
import { IconBulb, IconBulbOff } from 'tabler-icons';
import { Link } from 'react-router-dom';

import { AppTheme } from '../app.models';

interface ToolboxHeaderProps {
  theme: AppTheme;
  setTheme: (newTheme: AppTheme) => void;
}

export function ToolboxHeader(props: ToolboxHeaderProps) {
  const { theme, setTheme } = props;
  return (
    <Header>
      <Icon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? SetLightThemeIcon : SetDarkThemeIcon}
      </Icon>

      <StyledLink to="/">toolbox</StyledLink>
    </Header>
  );
}

const iconSize = 32;
const SetDarkThemeIcon = (
  <IconBulbOff size={iconSize} strokeWidth={1.5} stroke="#f2f2f2" fill="none" />
);
const SetLightThemeIcon = (
  <IconBulb size={iconSize} strokeWidth={1.5} stroke="#f2f2f2" fill="none" />
);

const Icon = styled.div`
  cursor: pointer;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
`;

const StyledLink = styled(Link)`
  font-size: 4.5rem;
  font-weight: normal;
  color: var(--fg);
  text-decoration: none;

  cursor: pointer;
`;
