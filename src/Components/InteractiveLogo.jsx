import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function InteractiveLogo() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    
    <FloatingContainer>
      <LogoContainer>
        <LogoText type="text" placeholder="webcity" spellCheck="false" />
        <LogoIcon fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"></path>
        </LogoIcon>
        <LanguageButton onClick={toggleLanguage}>
        {language === "en" ? "EN" : "FR"}
      </LanguageButton>
      </LogoContainer>
    </FloatingContainer>
  );
}

const FloatingContainer = styled.div`
    position: fixed;
    top: 35px;
    left: 35px;
    z-index: 998;

    @media (max-width: 768px) {
        top: 25px;
        left: 25px;
    }
`;


const LogoContainer = styled.div`
width: 180px;
height: 60px;
position: relative;
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: center;
border-radius: 50px;
border: 1px solid #000000;
background-color: #FFFFFF;
cursor: pointer;
transition: all 0.1s ease-in-out;

&:hover {
    background-color: #000000;
    color: #FFFFFF;
}

@media (max-width: 768px) {
    width: 150px;
    height: 50px;
}
`;

const LogoIcon = styled.svg`
  width: 2.3rem;
  height: 2.3rem;
  margin-left:20px;
  cursor: pointer;
  transform: scaleX(-1); // Flip icon on the y-axis
  transition: all 0.1s ease-in-out;

  ${LogoContainer}:hover & {
    stroke: #ffffff;
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const LogoText = styled.input`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 100%;
  margin-top: 2px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: #FFFFFF00;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #FFFFFF;
    &::placeholder {
      color: #FFFFFF; // Change placeholder color on hover
    }
  }

  &::placeholder {
    font-size: 1.6rem;
    color: #000000;
    transition: color 0.1s ease-in-out;
  }

  ${LogoContainer}:hover & {
    color: #ffffff;
    &::placeholder {
      color: #ffffff; // Change placeholder color on hover
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;

const LanguageButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

