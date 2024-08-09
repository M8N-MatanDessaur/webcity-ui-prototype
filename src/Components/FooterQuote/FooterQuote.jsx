import React from "react";

import { FooterQuoteContainer, FooterQuoteTextQuote } from "./FooterQuote.styles";

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