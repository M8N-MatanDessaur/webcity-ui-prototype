import styled, { css } from 'styled-components';

export const CategoryFilterWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background-color: white;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;

  ${props => props.isSelected && css`
    background-color: ${props.children === 'All' ? 'black' : '#C07FFD'};
    color: ${props.children === 'All' ? 'white' : 'black'};
  `}

  &:hover {
    background-color: ${props => props.children === 'All' ? 'black' : '#C07FFD'};
    color: ${props => props.children === 'All' ? 'white' : 'black'};
  }
`;