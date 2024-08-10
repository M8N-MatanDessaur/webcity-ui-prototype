import styled from "styled-components";

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
  background-color: #C07FFD;
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
  padding: 0.3rem;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  opacity: 0.8;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 50%;

  @media (max-width: 480px) {
    padding: 0.25rem;
  }
`;