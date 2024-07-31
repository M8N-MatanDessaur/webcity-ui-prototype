import React from "react";
import styled from "styled-components";

import { useTranslation } from 'react-i18next';

export default function FooterQuote() {
    const { t } = useTranslation();
    return (
        <FooterQuoteContainer>
            <FooterQuoteTextQuote>
                {t('footerQuote.text')}<span>&nbsp;❤️</span>
            </FooterQuoteTextQuote>
        </FooterQuoteContainer>
    );
    }

const FooterQuoteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--foreground-color);
    color: var(--text-color);
    padding: 0.5rem;

    font-weight: bold;
    width: 100%;
    height max-content;
    `;

const FooterQuoteTextQuote = styled.div`
    font-family: Poppins, sans-serif;
   font-size: 0.7rem;
    font-weight: 300;
    text-align: center;
    color: var(--text-color);
    opacity: 0.4;
    width: auto;
    `;

