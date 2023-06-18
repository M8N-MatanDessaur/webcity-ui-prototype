import React from "react";
import styled from "styled-components";
import BackButton from "../Components/BackButton";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

export default function Portfolio() {
    const { t } = useTranslation();
    return (
        <Container>
            <h1>{t('maintext.portfolio')}</h1>
            <p> {t('maintext.commingSoon')} </p>
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
    `;
