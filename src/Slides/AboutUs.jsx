import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import matan_picture from "../Assets/Images/matan.png";
import eric_picture from "../Assets/Images/eric.png";
import jacob_picture from "../Assets/Images/jacob.png";
import { Link } from "react-router-dom";

export default function AboutUs() {

    const { t } = useTranslation();

    return (
        <FluidContainer>
            <SectionTitle>{t('aboutUs.title')}&nbsp;✨</SectionTitle>
            <SectionSubtitle>{t('aboutUs.subtitle')}</SectionSubtitle>
            <Separator />
            <GridWrapper>
                <MemberCard>
                    <MemberPicture src={matan_picture} alt="Matan" onContextMenu={(event)=>event.preventDefault()}/>
                    <ExtraText>{t('aboutUs.matanExtraText')}</ExtraText>
                    <CardHeader>
                        <CardHeaderText>
                            <CardHeaderTitle>Matan Dessaur</CardHeaderTitle>
                            <CardHeaderSubtitle>{t('aboutUs.matanSubtitle')}</CardHeaderSubtitle>
                        </CardHeaderText>
                    </CardHeader>
                    <CardBody>
                        <CardBodyText>{t('aboutUs.matanText')}<span><LinkAlt to="/toolbox">{t('aboutUs.clickHere')}</LinkAlt></span></CardBodyText>
                    </CardBody>
                </MemberCard>
                <MemberCard>
                <ExtraText>{t('aboutUs.ericExtraText')}</ExtraText>
                    <MemberPicture src={eric_picture} alt="Eric" onContextMenu={(event)=>event.preventDefault()}/>
                    <CardHeader>
                        <CardHeaderText>
                            <CardHeaderTitle>Eric Gendron</CardHeaderTitle>
                            <CardHeaderSubtitle>{t('aboutUs.ericSubtitle')}</CardHeaderSubtitle>
                        </CardHeaderText>
                    </CardHeader>
                    <CardBody>
                        <CardBodyText>{t('aboutUs.ericText')}</CardBodyText>
                    </CardBody>
                </MemberCard>
                <MemberCard>
                    <MemberPicture src={jacob_picture} alt="Jacobs" onContextMenu={(event)=>event.preventDefault()}/>
                    <CardHeader>
                        <CardHeaderText>
                            <CardHeaderTitle>Jacob Gourgeon</CardHeaderTitle>
                            <CardHeaderSubtitle>{t('aboutUs.jacobsSubtitle')}</CardHeaderSubtitle>
                        </CardHeaderText>
                    </CardHeader>
                    <CardBody>
                        <CardBodyText>{t('aboutUs.jacobText')}</CardBodyText>
                    </CardBody>
                </MemberCard>
            </GridWrapper>
        </FluidContainer>
    );
}



const FluidContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background-attachment: fixed;
  margin-bottom: 100px;
`;

const Separator = styled.hr`
    width: 30%;
    height: 1px;
    border-color: var(--border-color);
    margin-bottom: 15px;
`;

const SectionTitle = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: var(--text-color);
    margin: 75px 0 15px 0;
    padding: 0 50px;

    @media (max-width: 800px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`;

const SectionSubtitle = styled.h2`
    width: 70%;    
    font-size: 1.5rem;
    font-weight: 100;
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 35px;
    padding: 0 50px;
    
    @media (max-width: 800px) {
        width: 100%;
        font-size: 1.25rem;
    }

    @media (max-width: 480px) {
        font-size: 1.15rem;
    }
`;

const GridWrapper = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 45px;
    padding: 35px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
        padding: 35px;
    }

    &::-webkit-scrollbar {
        width: 10px;
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }
`;

const MemberCard = styled.div`
    position: relative;
    width: 350px;
    height: max-content;
    min-height: 300px;
    padding: 25px;
    margin: 15px 0;
    border: 1px solid var(--border-color);    
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    background-color: var(--foreground-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 800px) {
        height: max-content;
        min-height: 0;
    }
`;

const CardHeader = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    color: var(--text-color);
    font-weight: bold;
`;

const MemberPicture = styled.img`
    position: absolute;
    top: -35px;
    left: -35px;
    width: 100px;
    background-color: transparent;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
    border-radius: 50%;
    border: 5px solid transparent;
    z-index: 1;

    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    touch-action: none;
    pointer-events: none;

    @media (max-width: 768px) {
        width: 75px;
        top: -25px;
        left: -25px;
    }

`;

const CardHeaderText = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--foreground-color);
    color: var(--text-color);
    font-size: 1rem;
    font-weight: bold;
`;

const CardHeaderTitle = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--foreground-color);
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

const CardHeaderSubtitle = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--foreground-color);
    color: var(--text-color);
    opacity: 0.8;
    font-size: 0.8rem;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

const CardBody = styled.div`    
    position: relative;
    width: 100%;
    height: 80%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
`;

const CardBodyText = styled.div`    
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: auto;
    color: var(--text-color);
    font-size: 0.9rem;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }

    &::-webkit-scrollbar {
        width: 10px;
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }
`;

const ExtraText = styled.h2`
    position: absolute;
    top: -18px;
    left: 65px;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--border-color);

    @media (max-width: 768px) {
        left: 55px;
    }

    @media (max-width: 480px) {
        left: 45px;
    }
    `;


    const LinkAlt = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    color: #7b68e1;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: var(--text-color);
        transition: all 0.2s ease-in-out;
    }
`;