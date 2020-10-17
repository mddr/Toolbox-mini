import styled from 'styled-components';

export const ViewWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 2rem;
  background: var(--bg-solid);
  border: none;
  box-shadow: var(--shadow-inset);
  overflow: hidden;
  color: var(--fg);
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 2rem;
  background: var(--bg-gradient);
  box-shadow: var(--shadow-base);
  color: var(--accent);
  border: none;
  padding: 0 2rem;
`;
