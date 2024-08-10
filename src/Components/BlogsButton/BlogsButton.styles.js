import styled, {keyframes} from 'styled-components';

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const Button = styled.button`
font-family: Poppins, sans-serif;
  background-color: #ffffff94;
  backdrop-filter: blur(10px);
  border: none;
  padding: 1rem 2rem;;
  position: fixed;
  top: 35px;
  right: 35px;
  z-index: 998;
  border-radius: 50px;
  border: 1px solid var(--text-color);
  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text-color);
    text-decoration: none;
  }
  span {
   font-size: 1.6rem;
  color: var(--text-color);
  }
  &:hover {
      background-color: black;
    & svg {
      fill: white;
    }
    & span {
      color: white;
    }
      color: white;
  }
  &:active {
    background-color: var(--background-color);
  }

   @media (max-width: 768px) {
   top: 25px;
    right: 25px;
    font-size: 1rem;
    & span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 380px) {
    font-size: 0.8rem;
    padding: 0.8rem 2rem;
    & span {
      font-size: 1rem;
    }
  }

  animation: ${fadeIn} 0.3s ease-in-out;
};
`;