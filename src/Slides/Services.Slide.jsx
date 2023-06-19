import React from "react";
import styled from "styled-components";
import ScrollArrow from "../Components/ScrollArrow";
import animatedbg from "../Assets/Images/Fluid-10s-1368px.svg";
import { useTranslation } from "react-i18next";

export default function Services() {
    const { t } = useTranslation();
    return (
        <FluidContainer id="services">
            <Text>
                {t('serviceText.title')}
            </Text>
            <ServicesContainer>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.905 8.226a.601.601 0 0 0-.85-.85l-4.2 4.2a.6.6 0 0 0 0 .85l4.2 4.2a.601.601 0 0 0 .85-.85l-3.777-3.775 3.777-3.775Zm5.15 0a.6.6 0 1 1 .85-.85l4.2 4.2a.6.6 0 0 1 0 .85l-4.2 4.2a.601.601 0 0 1-.85-.85l3.776-3.775-3.776-3.775Z"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        {t('serviceText.webDevelopment')}                        
                    </ServiceTitle>
                    <ServiceDescription>
                        {t('serviceText.webDevelopmentText')}
                    </ServiceDescription>
                </Service>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.91 2.544a.6.6 0 0 1 .159.701c-1.836 4.116-5.692 9.804-8.514 12.768a7.282 7.282 0 0 1-2.848 1.84 4.996 4.996 0 0 1-.192 1.042c-.241.791-.8 1.775-2.05 2.088a9.742 9.742 0 0 1-3.693.159 4.399 4.399 0 0 1-.674-.162 1.658 1.658 0 0 1-.56-.297.857.857 0 0 1-.244-.345.746.746 0 0 1 .004-.532c.114-.294.38-.456.554-.542.472-.236.75-.544 1.04-.991.114-.173.22-.357.344-.567l.14-.237c.182-.306.392-.648.656-1.018.634-.887 1.441-1.11 2.095-1.075.151.008.292.03.418.058.074-.207.17-.457.285-.73.314-.743.79-1.703 1.425-2.483 2.611-3.204 7.416-7.447 10.94-9.725a.6.6 0 0 1 .715.048ZM7.566 16.694a1.476 1.476 0 0 0-.502-.12c-.296-.015-.688.06-1.055.575-.237.33-.426.639-.6.933l-.126.212c-.127.218-.256.435-.384.634a4.068 4.068 0 0 1-.912 1.033 8.551 8.551 0 0 0 3.188-.144c.671-.167 1.012-.683 1.192-1.272.087-.293.138-.595.151-.9l-.952-.95Zm1.728.032c.144-.048.333-.12.55-.22a6.08 6.08 0 0 0 1.842-1.32c2.28-2.395 5.294-6.684 7.262-10.357-3.108 2.312-6.679 5.592-8.762 8.15-.53.652-.954 1.492-1.25 2.192-.146.345-.257.648-.33.864l.69.69h-.002Zm-5.967 3.648.008-.006a.038.038 0 0 1-.008.005Zm4.298-3.652.003.002h-.003v-.002Z"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        {t('serviceText.webDesign')}
                    </ServiceTitle>
                    <ServiceDescription>
                        {t('serviceText.webDesignText')}
                    </ServiceDescription>
                </Service>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 2.5a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-1.2 0V3.1a.6.6 0 0 1 .6-.6Zm-5.6 5.6a.6.6 0 0 1 .6.6v7.2a.6.6 0 0 1-1.2 0v-7.2a.6.6 0 0 1 .6-.6Zm11.2 0a.6.6 0 0 1 .6.6v7.2a.6.6 0 0 1-1.2 0v-7.2a.6.6 0 0 1 .6-.6Zm-5.6 5.6a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-1.2 0v-2.8a.6.6 0 0 1 .6-.6Zm-5.6 0a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-1.2 0v-2.8a.6.6 0 0 1 .6-.6Z"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        {t('serviceText.webHosting')}
                    </ServiceTitle>
                    <ServiceDescription>
                        {t('serviceText.webHostingText')}
                    </ServiceDescription>
                </Service>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.75 11.717a.496.496 0 0 0-.439-.466l-1.202-.194a.253.253 0 0 1-.21-.22 6.815 6.815 0 0 0-.08-.446.259.259 0 0 1 .123-.274l1.068-.593a.485.485 0 0 0 .234-.601l-.185-.511a.484.484 0 0 0-.569-.305l-1.197.234a.258.258 0 0 1-.273-.132 8.426 8.426 0 0 0-.225-.394.262.262 0 0 1 .02-.305l.797-.92a.489.489 0 0 0 .019-.646l-.348-.417a.48.48 0 0 0-.637-.094l-1.048.63a.253.253 0 0 1-.3-.03 9.508 9.508 0 0 0-.345-.29.256.256 0 0 1-.08-.291l.433-1.144a.485.485 0 0 0-.202-.613l-.472-.274a.483.483 0 0 0-.631.133l-.767.96a.215.215 0 0 1-.262.081c-.03-.011-.27-.11-.458-.173a.254.254 0 0 1-.176-.245l.018-1.222a.49.49 0 0 0-.401-.51l-.537-.094a.49.49 0 0 0-.55.336l-.4 1.163a.254.254 0 0 1-.25.171h-.457a.26.26 0 0 1-.249-.172l-.396-1.156a.49.49 0 0 0-.552-.34l-.537.094a.49.49 0 0 0-.402.505l.019 1.227a.256.256 0 0 1-.181.246l-.446.17c-.094.034-.197-.003-.281-.099l-.763-.937a.483.483 0 0 0-.628-.136l-.472.274a.486.486 0 0 0-.202.617l.433 1.141a.26.26 0 0 1-.08.292c-.113.094-.23.187-.346.292a.252.252 0 0 1-.298.03l-1.036-.642a.487.487 0 0 0-.638.094l-.347.417a.484.484 0 0 0 .017.645l.801.919a.254.254 0 0 1 .021.302c-.08.127-.156.261-.225.396a.26.26 0 0 1-.275.132L3.502 8.1a.485.485 0 0 0-.569.305l-.188.51a.486.486 0 0 0 .235.602l1.068.593a.253.253 0 0 1 .124.278l-.01.058c-.026.13-.048.255-.07.387a.257.257 0 0 1-.209.218l-1.205.194a.488.488 0 0 0-.428.482v.543a.481.481 0 0 0 .43.48l1.203.195a.254.254 0 0 1 .211.219c.023.148.047.3.08.446a.259.259 0 0 1-.124.274l-1.067.594a.485.485 0 0 0-.234.601l.187.511a.484.484 0 0 0 .569.305l1.198-.232a.258.258 0 0 1 .272.132c.07.131.147.264.225.395a.262.262 0 0 1-.02.304l-.797.921a.488.488 0 0 0-.024.645l.348.418a.48.48 0 0 0 .636.094l1.049-.63a.253.253 0 0 1 .3.03c.116.101.234.2.345.29a.256.256 0 0 1 .08.29l-.434 1.145a.485.485 0 0 0 .202.612l.474.274a.483.483 0 0 0 .63-.132l.777-.954c.065-.081.168-.117.245-.087.163.068.272.106.466.17a.255.255 0 0 1 .176.246l-.02 1.22a.493.493 0 0 0 .403.51l.536.095a.49.49 0 0 0 .551-.336l.398-1.162a.257.257 0 0 1 .252-.17h.457a.258.258 0 0 1 .248.171l.397 1.157a.49.49 0 0 0 .552.34l.538-.094a.49.49 0 0 0 .401-.506l-.018-1.226a.255.255 0 0 1 .175-.244c.18-.06.306-.11.418-.152l.028-.011c.144-.05.212.007.257.061l.785.968a.483.483 0 0 0 .63.132l.472-.274a.486.486 0 0 0 .202-.614l-.433-1.14a.258.258 0 0 1 .079-.293c.114-.093.23-.187.347-.291a.252.252 0 0 1 .299-.03l1.05.629a.487.487 0 0 0 .637-.094l.347-.417a.483.483 0 0 0-.017-.645l-.8-.922a.253.253 0 0 1-.021-.302 5.32 5.32 0 0 0 .226-.396.261.261 0 0 1 .275-.132l1.194.233a.485.485 0 0 0 .569-.305l.185-.51a.486.486 0 0 0-.234-.602l-1.069-.594a.254.254 0 0 1-.122-.276l.01-.059c.025-.13.047-.255.07-.387a.257.257 0 0 1 .209-.217l1.204-.194a.489.489 0 0 0 .43-.482v-.549Zm-13.707 5.22a6.334 6.334 0 0 1 .024-9.889l2.812 4.95-2.836 4.938ZM12 18.334a6.27 6.27 0 0 1-2.273-.424l2.835-4.935h5.683c-.47 3.031-3.09 5.359-6.245 5.359Zm.565-7.308-2.81-4.945A6.275 6.275 0 0 1 12 5.668c3.154 0 5.776 2.328 6.245 5.359h-5.68Z"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        {t('serviceText.webMaintenance')}
                    </ServiceTitle>
                    <ServiceDescription>
                        {t('serviceText.webMaintenanceText')}
                    </ServiceDescription>
                </Service>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 23.295v-3.6c-5.01-.26-9-4.42-9-9.49 0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5c0 4.95-3.44 9.93-8.57 12.4l-1.43.69Zm.5-20.59c-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5h1.5v2.3c3.64-2.3 6-6.08 6-9.8 0-4.14-3.36-7.5-7.5-7.5Zm-1 11.5h2v2h-2v-2Zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5Z"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        {t('serviceText.unlimitedSupport')}
                    </ServiceTitle>
                    <ServiceDescription>
                        {t('serviceText.unlimitedSupportText')}
                    </ServiceDescription>
                </Service>
                <Service>
                    <ServiceIcon>
                        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2Zm0 13H4v-2h16v2ZM4 10h16V4H4v6Z" clip-rule="evenodd"></path>
                        </svg>
                    </ServiceIcon>
                    <ServiceTitle>
                        {t('serviceText.montlyPlan')}
                    </ServiceTitle>
                    <ServiceDescription>
                        {t('serviceText.montlyPlanText')}
                    </ServiceDescription>
                </Service>
            </ServicesContainer>
            <ScrollArrow/>
        </FluidContainer>
    );
}

const FluidContainer = styled.div`
  position: relative;
  background: url(${animatedbg}) no-repeat center center/cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  padding: 100px 35px;
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
    font-size: 2;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ServicesContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    margin-bottom: 2rem;

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
    max-height: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem;
    backdrop-filter: blur(8px) saturate(180%);
    -webkit-backdrop-filter: blur(8px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.35);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.4);

    transition: all 0.1s ease-in-out;

    &:hover {
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
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;