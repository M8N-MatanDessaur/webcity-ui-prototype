import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import matan_picture from "../Assets/Images/matan.png";
import eric_picture from "../Assets/Images/eric.png";
import jacob_picture from "../Assets/Images/jacob.png";

export default function AboutUs() {

    const { t } = useTranslation();

    return (
        <FluidContainer>
            <SectionTitle>{t('aboutUs.title')}&nbsp;✨</SectionTitle>
            <SectionSubtitle>{t('aboutUs.subtitle')}</SectionSubtitle>
            <Separator />
            <GridWrapper>
                <MemberCard>
                    <ConversationHeaderImage src={matan_picture} alt="Matan" />
                    <ConversationHeader>
                        <ConversationHeaderText>
                            <ConversationHeaderTitle>Matan Dessaur</ConversationHeaderTitle>
                            <ConversationHeaderSubtitle>{t('aboutUs.matanSubtitle')}</ConversationHeaderSubtitle>
                        </ConversationHeaderText>
                    </ConversationHeader>
                    <ConversationBody>
                        <ConversationBodyText>{t('aboutUs.matanText')}</ConversationBodyText>
                    </ConversationBody>
                </MemberCard>
                <MemberCard>
                    <ConversationHeaderImage src={eric_picture} alt="Eric" />
                    <ConversationHeader>
                        <ConversationHeaderText>
                            <ConversationHeaderTitle>Eric Gendron</ConversationHeaderTitle>
                            <ConversationHeaderSubtitle>{t('aboutUs.ericSubtitle')}</ConversationHeaderSubtitle>
                        </ConversationHeaderText>
                    </ConversationHeader>
                    <ConversationBody>
                        <ConversationBodyText>{t('aboutUs.ericText')}</ConversationBodyText>
                    </ConversationBody>
                </MemberCard>
                <MemberCard>
                    <ConversationHeaderImage src={jacob_picture} alt="Jacobs" />
                    <ConversationHeader>
                        <ConversationHeaderText>
                            <ConversationHeaderTitle>Jacob Gourgeon</ConversationHeaderTitle>
                            <ConversationHeaderSubtitle>{t('aboutUs.jacobsSubtitle')}</ConversationHeaderSubtitle>
                        </ConversationHeaderText>
                    </ConversationHeader>
                    <ConversationBody>
                        <ConversationBodyText>{t('aboutUs.jacobText')}</ConversationBodyText>
                    </ConversationBody>
                </MemberCard>
            </GridWrapper>
        </FluidContainer>
    );
}



const FluidContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 50px;

    @media (max-width: 800px) {
        padding: 25px;
        min-height: 100svh !important;
        max-height: unset !important;
    }
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: max-content;
    gap: 20px;
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
    width: 400px;
    height: max-content;
    min-height: 260px;
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
        width: 100%;
        height: max-content;
    }
`;

const ConversationHeader = styled.div`
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

const ConversationHeaderImage = styled.img`
    position: absolute;
    top: -35px;
    left: -35px;
    width: 100px;
    background-color: var(--foreground-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
    border-radius: 50%;
    border: 5px solid var(--background-color);
    z-index: 1;

    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    touch-action: none;

    &:active {
        transform: scale(0.95);
        transition: all 0.1s ease-in-out;
        filter: brightness(0.8);
    }


    @media (max-width: 768px) {
        width: 75px;
        top: -25px;
        left: -25px;
    }

`;

const ConversationHeaderText = styled.div`
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

const ConversationHeaderTitle = styled.div`
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

const ConversationHeaderSubtitle = styled.div`
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

const ConversationBody = styled.div`    
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

const ConversationBodyText = styled.div`    
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
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