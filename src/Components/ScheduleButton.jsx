import React, { useState } from "react";
import { toast } from "react-hot-toast";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
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

const InputWrapper = styled.div`
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

const InputField = styled.input`
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

const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-color);
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 35px;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const FormSubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 100;
  color: var(--text-color);
  opacity: 0.8;
  text-align: center;

  & span {
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const SubmitButton = styled.button`
  padding: 1.3rem 3rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 2rem;
`;

const CloseButton = styled.button`
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


const ScheduleButton = ({ isOn }) => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const { t } = useTranslation();
  
    const handleButtonClick = () => {
      setShowModal((prevShowModal) => !prevShowModal);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
      setName("");
      setEmail("");
      setNumber("");
    };
  
    const confirm = (e) => {
      e.preventDefault();
      setShowModal(false);
      toast.success("Thank you for contacting us.");
      document.getElementById("form").submit();
    };

  return (
    <>
      <Button isOn={isOn} onClick={handleButtonClick}>
        {t('buttonText.scheduling')}
      </Button>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <div>
              <FormTitle>
                {t('formText.schedulingAppointment')}
              </FormTitle>
              <FormSubTitle>
                {t('formText.schedulingSlogan')} <span>⚡</span>
              </FormSubTitle>
            </div>
            <Form onSubmit={confirm} action="https://api.web3forms.com/submit" method="POST" id="form">
              <input type="hidden" name="access_key" value="b07e6e42-1e9f-49f2-a3f6-284515cd1c8c" />
              <input type="hidden" name="subject" value="Hurray we got a new client 🎊"></input>
              <input type="hidden" name="redirect" value="https://webcity.dev"></input>
              <input type="hidden" name="from_name" value="Webcity request"></input>
              <input type="checkbox" name="botcheck" class="hidden" style={{ display: "none" }}></input>
              <FlexRow>
                <InputWrapper>
                  <InputField
                    type="text"
                    name="name"
                    required
                    value={name}
                    placeholder={t('formText.fullname')}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <InputField
                    type="tel"
                    name="number"
                    required
                    value={number}
                    placeholder={t('formText.phone')}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </InputWrapper>
              </FlexRow>
              <InputWrapper>
                <InputField
                  type="email"
                  name="email"
                  required
                  value={email}
                  placeholder={t('formText.email')}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputWrapper>
              <SubmitButton type="submit">{t('formText.summit')}</SubmitButton>
            </Form>
            <CloseButton onClick={handleModalClose}>
              <svg
                fill="none"
                stroke="var(--text-color)"
                height="16px"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.25 17.25 6.75 6.75"></path>
                <path d="m17.25 6.75-10.5 10.5"></path>
              </svg>
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

const Button = styled.button`
  display: ${({ isOn }) => (isOn ? "flex" : "none")};
  width: max-content;
  height: 50px;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  background-color: #fff;
  color: #000;
  border-radius: 26px;
  box-shadow: 35px 35px 68px 0px rgba(204, 204, 204, 0.5),
    inset -8px -8px 16px 0px rgba(204, 204, 204, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 200;
  border: 1px solid #00000020;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  z-index: 1;
  animation: ${({ isOn }) => (isOn ? fadeInAnimation : "none")} 1s ease-in-out forwards;

  &:hover {
    filter:drop-shadow(0 10px 10px #00000030);
  }

  @media (max-width: 768px) {
    width: max-content;
    height: 40px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: max-content;
    font-size: 0.9rem;
  }
`;

export default ScheduleButton;
