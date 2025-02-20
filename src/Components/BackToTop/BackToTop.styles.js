import styled from 'styled-components';

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 35px;
  right: 35px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
  z-index: 1000;

  & > svg {
  fill: white;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-2px);
  }

 @media (max-width: 768px) {
        bottom: 25px;
        right: 25px;
        left: auto;
        padding: 8px;
        width: 44px;
        height: 44px;
    }
`;
