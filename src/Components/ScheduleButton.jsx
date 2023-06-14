import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
    width: 700px;	
    position: relative;
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.209);
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
border: 1px solid rgba(0, 0, 0, 0.209);
border-radius: 50px;
padding: 1.3rem 3rem;
outline: none;
font-size: 1rem;
transition: all 0.2s ease-in-out;
width: 100%;
height: 100%;

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
    color: #000;
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
    color: #00000080;
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
    background-color: black;
    color: #fff;
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

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setName("");
        setEmail("");
        setNumber("");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Number:", number);
        handleModalClose();
    };

    return (
        <>
            <Button href="#" isOn={isOn} onClick={handleButtonClick}>
                Schedule a Meeting
            </Button>
            {showModal && (
                <ModalOverlay>
                    <ModalContent>
                        <div>
                        <FormTitle>Schedule an Appointment</FormTitle>
                        <FormSubTitle>we'll contact you in less than a flash <span>⚡</span></FormSubTitle>
                        </div>
                        <Form onSubmit={handleFormSubmit}>
                            <FlexRow>
                                <InputWrapper>
                                    <InputField
                                        type="text"
                                        value={name}
                                        placeholder="full name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <InputField
                                        type="tel"
                                        value={number}
                                        placeholder="phone number"
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </InputWrapper>
                            </FlexRow>
                            <InputWrapper>
                                <InputField
                                    type="email"
                                    value={email}
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </InputWrapper>
                            <SubmitButton type="submit">Submit</SubmitButton>
                        </Form>
                        <CloseButton onClick={handleModalClose}>
                            <svg fill="none" stroke="currentColor" height="16px" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 1.2rem;
  color: #fff;
  width: auto;
  height: max-content;
  align-items: center;
  justify-content: center;
  background-color: #005ce6;
  border: none;
  outline: none;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.5rem;
  }
};`;

export default ScheduleButton;
