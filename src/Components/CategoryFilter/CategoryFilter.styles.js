import styled, { css } from 'styled-components';

export const CategoryFilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: 0.7rem 1.2rem;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  background-color: white;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;

    ${({ isSelected, children }) =>
    isSelected &&
    css`
      background-color: ${['All', 'Tous'].includes(children) ? 'black' : '#C07FFD'};
      color: ${['All', 'Tous'].includes(children) ? 'white' : 'black'};
    `}

  &:hover {
    background-color: ${props =>
      ['All', 'Tous'].includes(props.children) ? 'black' : '#C07FFD'};
    color: ${props =>
      ['All', 'Tous'].includes(props.children) ? 'white' : 'black'};
  }
`;