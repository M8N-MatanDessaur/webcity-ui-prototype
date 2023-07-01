import React from "react";
import styled from "styled-components";

import Blob from "../Components/Blob";
import BackButton from "../Components/BackButton";

import { useTranslation } from "react-i18next";


export default function Toolbox() {
    const { t } = useTranslation();
    return (
        <Container>
            <Title>{t('toolbox.title')}</Title>
            <Glassbox>
                <CategoriesGrid>
                    <Category href="/fontstools">
                        <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.17 15.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09l1.12-3ZM12 7.98l2.07 5.52H9.93L12 7.98ZM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 18H4V4h16v16Z"></path>
                        </svg>
                        <CategoryTitle>{t('toolbox.fontsTools')}</CategoryTitle>
                    </Category>
                    <Category href="/illustrationstools">
                        <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.839 7.401a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89-4.51 4.51v4.24h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48Zm-15.93-.33 1.89-1.9 1.27 1.27-1.18 1.19 1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88Zm11.23 7.44-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21Zm-9.86 4.62h-1.41v-1.41l9.61-9.61 1.41 1.41-9.61 9.61Zm9.61-12.44 1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41Z"></path>
                        </svg>
                        <CategoryTitle>{t('toolbox.illustrationsTools')}</CategoryTitle>
                    </Category>
                    <Category href="/generatorstools">
                        <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.432 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65a.488.488 0 0 0-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65Zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.35-2.48-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74 0-.2.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.35 2.48 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13ZM12.002 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"></path>
                        </svg>
                        <CategoryTitle>{t('toolbox.generatorsTools')}</CategoryTitle>
                    </Category>
                    <Category href="moretools">
                        <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4 8h4V4H4v4Zm6 12h4v-4h-4v4Zm-2 0H4v-4h4v4Zm-4-6h4v-4H4v4Zm10 0h-4v-4h4v4Zm2-10v4h4V4h-4Zm-2 4h-4V4h4v4Zm2 6h4v-4h-4v4Zm4 6h-4v-4h4v4Z" clip-rule="evenodd"></path>
                        </svg>
                        <CategoryTitle>{t('toolbox.moreTools')}</CategoryTitle>
                    </Category>
                    <Category href="aitools">
                        <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.864 8.465a3.507 3.507 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059a3.483 3.483 0 0 0 4.398.498 3.51 3.51 0 0 0 1.292-1.499 4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.029 4.029 0 0 0-2.136-3.535ZM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.02 2.02 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5Zm9.575-6.308-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5a1 1 0 0 1 1-1c.552 0 1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692Z"></path>
                        </svg>
                        <CategoryTitle>{t('toolbox.aiTools')}</CategoryTitle>
                    </Category>
                    <Category href="gamestools">
                        <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 10H3V8h18v8ZM6 15h2v-2h2v-2H8V9H6v2H4v2h2v2Z"></path>
                            <path d="M14.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            <path d="M18.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                        </svg>
                        <CategoryTitle>{t('toolbox.games')}</CategoryTitle>
                    </Category>
                </CategoriesGrid>
            </Glassbox>
            <BackButton />
            <Blob /><BlurredOverlay />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    height: 100%;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image:url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png);
    background-size: 10%;

    @media (max-width: 480px) {
        background-size: 25%;
    }
    `;

const Title = styled.h1`
    color: var(--text-color);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    `;

const BlurredOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(40px);
`;

const Glassbox = styled.div`
    position: relative;
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background: var(--foreground-color);
    opacity: 0.8;
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    `;

const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    padding: 35px;
    height: 100%;
    width: 100%;
    gap: 15px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--text-color) var(--foreground-color);
    &::-webkit-scrollbar {
        width: 12px;
    }
    &::-webkit-scrollbar-track {
        background: var(--foreground-color);
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }

    @media (max-width: 680px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Category = styled.a`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 25px;
    margin: 15px 0;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--foreground-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;

    & svg {
        width: 30%;
        height: 30%;
    }

    &:hover {
        border-color: var(--text-color);
        transform: scale(1.02);
        transition: all 0.1s ease-in-out;
        cursor: pointer;

        & svg {
            transform: scale(1.2);
            transition: all 0.15s ease-in-out;
        }
    }

    &:active {
        border-color: var(--border-color);
        transform: scale(0.98);
        transition: all 0.1s ease-in-out;
    }
    `;

const CategoryTitle = styled.h2`
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 700;

    @media (max-width: 560px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 0.8rem;
    }

    @media (max-width: 320px) {
        font-size: 0.7rem;
    }
    `;
