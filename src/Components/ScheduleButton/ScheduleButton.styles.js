import styled, { keyframes } from "styled-components";

export const Button = styled.button`
font-family: Poppins, sans-serif;
  display: ${({ isOn }) => (isOn ? "flex" : "none")};
  width: max-content;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  background-color: #fff;
  color: #000;
  border-radius: 26px;
  box-shadow: inset -8px -8px 16px 0px rgba(204, 204, 204, 0.6),
  inset 0px 11px 28px 0px rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 300;
  border: 1px solid #00000020;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  z-index: 1;
  animation: ${({ isOn }) => (isOn ? fadeInAnimation : "none")} 500ms ease-in-out forwards;

  &:hover {
    filter:drop-shadow(0 10px 10px #00000030);
  }

  @media (max-width: 768px) {
    width: max-content;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: max-content;
    font-size: 0.9rem;
  }
`;


export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  width: 100%;
  height: 100vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 700px;
  position: relative;
  background-color: var(--foreground-color);
  padding: 50px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
    width: 90%;
  }

  @media (max-width: 320px) {
    padding: 0.5rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    width: -webkit-fill-available;
  }

  @media (max-width: 320px) {
    margin-bottom: 0.25rem;
  }
`;

export const InputField = styled.input`
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  padding: 1.3rem 3rem;
  outline: none;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;
  color: var(--text-color);



  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-color);
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 35px;
  }

  @media (max-width: 320px) {
    font-size: 1.1rem;
  }
`;

export const FormSubTitle = styled.h3`
  font-size: 1.5rem;
 font-weight: 300
  color: var(--text-color);
  opacity: 0.8;
  text-align: center;

  & span {
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 1.3rem 3rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin: 2rem 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.2rem;
  background-color: var(--background-color);
  opacity: 0.8;
  color: var(--text-color);
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 50%;

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;