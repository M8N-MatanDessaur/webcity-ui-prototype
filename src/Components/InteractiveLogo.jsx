import React from "react";
import styled from "styled-components";

export default function InteractiveLogo() {
    return (
        <FLoatingContainer>
        <LogoContainer>
            <LogoText type="text" placeholder="webcity" spellCheck="false" />
            <LogoIcon fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"></path>
            </LogoIcon>
        </LogoContainer>
        </FLoatingContainer>
    );
}

const FLoatingContainer = styled.div`
    position: fixed;
    top: 35px;
    left: 35px;
    z-index: 1000;
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
`;

