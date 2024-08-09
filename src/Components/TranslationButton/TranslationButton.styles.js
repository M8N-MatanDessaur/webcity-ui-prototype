import styled from "styled-components";

export const LanguageButton = styled.button`
  position: fixed;
  top: 25px;
  right: 25px;
  background-color: transparent;
  color: #00000080;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.1s ease-in-out;
  z-index: 998;

  &:hover {
    transform: scale(0.95);
  }
`;