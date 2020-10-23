import React from 'react';
import styled from 'styled-components';
import { IconBulb, IconBulbOff } from 'tabler-icons';
import { Link, useLocation } from 'react-router-dom';

import { AppTheme } from '../app.models';

interface ToolboxHeaderProps {
  theme: AppTheme;
  setTheme: (newTheme: AppTheme) => void;
}

export function ToolboxHeader({ theme, setTheme }: ToolboxHeaderProps) {
  const { pathname } = useLocation();

  return (
    <Header>
      <Icon
        data-test-id={'theme-switch'}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? SetLightThemeIcon : SetDarkThemeIcon}
      </Icon>

      <div>
        <PathName data-test-id={'path-name'}>
          {pathname.replace('/', '')}
        </PathName>
        <StyledLink data-test-id={'home-link'} to="/">
          toolbox
        </StyledLink>
      </div>
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

const Icon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: var(--fg);
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

const PathName = styled.span`
  padding-right: 1rem;
  font-size: 2rem;
`;
