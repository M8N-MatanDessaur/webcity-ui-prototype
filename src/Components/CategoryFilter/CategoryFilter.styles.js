import styled from 'styled-components';

export const CategoryFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.75rem;
    justify-content: center;
  }
`;

export const CategoryButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  background: ${props => {
    if (props.isSelected) {
      return ['All', 'Tous'].includes(props.children) 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)'
        : 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)';
    }
    return 'white';
  }};
  color: ${props => props.isSelected ? 'white' : '#555'};
  font-size: 0.95rem;
  font-weight: ${props => props.isSelected ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.isSelected ? 
    '0 4px 12px rgba(0, 0, 0, 0.15)' : 
    '0 2px 4px rgba(0, 0, 0, 0.05)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    background: ${props => {
      if (props.isSelected) {
        return ['All', 'Tous'].includes(props.children)
          ? 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)'
          : 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)';
      }
      return 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    }};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;