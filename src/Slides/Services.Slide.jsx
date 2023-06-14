import React from "react";
import styled from "styled-components";
import ScrollArrow from "../Components/ScrollArrow";

export default function Services() {
    return (
        <FluidContainer id="services">
            <Text>
                elevate your performance with our insightful services
            </Text>
            <ServicesContainer>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.905 8.226a.601.601 0 0 0-.85-.85l-4.2 4.2a.6.6 0 0 0 0 .85l4.2 4.2a.601.601 0 0 0 .85-.85l-3.777-3.775 3.777-3.775Zm5.15 0a.6.6 0 1 1 .85-.85l4.2 4.2a.6.6 0 0 1 0 .85l-4.2 4.2a.601.601 0 0 1-.85-.85l3.776-3.775-3.776-3.775Z"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        Web Development
                    </ServiceTitle>
                    <ServiceDescription>
                        We build websites that are fast, secure, and easy to use. We use the latest technologies to ensure your website is up to date with the latest trends.
                    </ServiceDescription>
                </Service>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.91 2.544a.6.6 0 0 1 .159.701c-1.836 4.116-5.692 9.804-8.514 12.768a7.282 7.282 0 0 1-2.848 1.84 4.996 4.996 0 0 1-.192 1.042c-.241.791-.8 1.775-2.05 2.088a9.742 9.742 0 0 1-3.693.159 4.399 4.399 0 0 1-.674-.162 1.658 1.658 0 0 1-.56-.297.857.857 0 0 1-.244-.345.746.746 0 0 1 .004-.532c.114-.294.38-.456.554-.542.472-.236.75-.544 1.04-.991.114-.173.22-.357.344-.567l.14-.237c.182-.306.392-.648.656-1.018.634-.887 1.441-1.11 2.095-1.075.151.008.292.03.418.058.074-.207.17-.457.285-.73.314-.743.79-1.703 1.425-2.483 2.611-3.204 7.416-7.447 10.94-9.725a.6.6 0 0 1 .715.048ZM7.566 16.694a1.476 1.476 0 0 0-.502-.12c-.296-.015-.688.06-1.055.575-.237.33-.426.639-.6.933l-.126.212c-.127.218-.256.435-.384.634a4.068 4.068 0 0 1-.912 1.033 8.551 8.551 0 0 0 3.188-.144c.671-.167 1.012-.683 1.192-1.272.087-.293.138-.595.151-.9l-.952-.95Zm1.728.032c.144-.048.333-.12.55-.22a6.08 6.08 0 0 0 1.842-1.32c2.28-2.395 5.294-6.684 7.262-10.357-3.108 2.312-6.679 5.592-8.762 8.15-.53.652-.954 1.492-1.25 2.192-.146.345-.257.648-.33.864l.69.69h-.002Zm-5.967 3.648.008-.006a.038.038 0 0 1-.008.005Zm4.298-3.652.003.002h-.003v-.002Z"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        Web Design
                    </ServiceTitle>
                    <ServiceDescription>
                    We create captivating, contemporary websites that blend beauty, functionality, and user-friendliness tailored to reflect your brand.
                    </ServiceDescription>
                </Service>
            </ServicesContainer>
            <ScrollArrow slide="#schedule" />
        </FluidContainer>
    );
}

const FluidContainer = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Text = styled.blockquote`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: #000;
  width: auto;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: open-quote;
    font-size: 3rem;
    color: #000;
    opacity: 0.5;
    margin-right: 1rem;
    }

&::after {
    content: close-quote;
    font-size: 3rem;
    color: #000;
    opacity: 0.5;
    margin-left: 1rem;
    }
  

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.5rem;
  }
`;

const ServicesContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }

    @media (max-width: 320px) {
        padding: 0.5rem;
    }
`;

const Service = styled.div`
    width: 30%;
    height: max-content;
    max-height: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #00000020;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02) translateY(-0.5rem);
        box-shadow: 0 2rem 2rem #00000009;
        border: 1px solid #00000040;
    }

    @media (max-width: 940px) {
        width: auto;
        padding: 1rem;
    }
`;

const ServiceIcon = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #000;
    margin-bottom: 1rem;

    & svg {
        width: 100%;
        height: 100%;
    }
`;

const ServiceTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #000;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }

    @media (max-width: 320px) {
        font-size: 0.5rem;
    }
`;

const ServiceDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: #000;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }

    @media (max-width: 320px) {
        font-size: 0.5rem;
    }
`;