import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styled from "styled-components";
import { AltHeading, Paragraph, Separator } from "../Components/_Common/common.styles";
import MembersGrid from "../Components/MembersGrid/MembersGrid";

const AboutSection = styled.section`
    padding: 2rem 2rem;
    background: #fff;
    position: relative;
    overflow: hidden;
`;

const Content = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto 4rem;
    text-align: center;
`;

const StyledQuote = styled(motion.blockquote)`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.6;
    color: var(--text-color);
    margin: 2rem 0;
    padding: 2rem;
    position: relative;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &::before {
        content: '"';
        position: absolute;
        top: -20px;
        left: 20px;
        font-size: 5rem;
        color: #FF1493;
        opacity: 0.2;
    }
`;

const StyledParagraph = styled(Paragraph)`
    font-size: 1.1rem;
    line-height: 1.8;
    opacity: 0.9;
    margin: 1.5rem 0;
`;

const StyledSeparator = styled(Separator)`
    margin: 3rem auto;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #FF1493 0%, rgba(255, 20, 147, 0.6) 100%);
    border-radius: 2px;
`;

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <AboutSection>
            <Content
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <AltHeading>{t('aboutUs.title')}</AltHeading>
                    <StyledParagraph>{t('aboutUs.subtitle')}</StyledParagraph>
                </motion.div>

                <StyledQuote
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {t('aboutUs.vision')}
                </StyledQuote>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <StyledParagraph>{t('aboutUs.visionText')}</StyledParagraph>
                </motion.div>
            </Content>

            <StyledSeparator />
            <MembersGrid />
        </AboutSection>
    );
}
