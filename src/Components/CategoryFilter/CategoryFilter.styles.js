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
      background-color: ${['All', 'Tous'].includes(children) ? 'black' : '#FF1493'};
      color: ${['All', 'Tous'].includes(children) ? 'white' : 'white'};
      border: ${['All', 'Tous'].includes(children) ? '1px solid black' : '1px solid #FF1493'};
        font-weight: 600;
    `}

  &:hover {
    background-color: ${props =>
      ['All', 'Tous'].includes(props.children) ? 'black' : '#FF1493'};
    color: ${props =>
      ['All', 'Tous'].includes(props.children) ? 'white' : 'white'};
      border: ${props =>
      ['All', 'Tous'].includes(props.children) ? '1px solid black' : '1px solid #FF1493'};
  }
`;