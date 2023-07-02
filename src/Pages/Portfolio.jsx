import React from "react";
import styled from "styled-components";
import BackButton from "../Components/BackButton";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
    const { t } = useTranslation();
    return (
        <Container>
            <Title>{t('mainText.portfolio')}</Title>
            <Text> {t('mainText.commingSoon')} </Text>
            <BackButton />
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
    background-image:url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png);
    background-size: 10%;
    @media (max-width: 480px) {
        background-size: 25%;
    }
    `;

const Title = styled.h1`
    color: var(--text-color);
    `;

const Text = styled.p`
    color: var(--text-color);
    `;
