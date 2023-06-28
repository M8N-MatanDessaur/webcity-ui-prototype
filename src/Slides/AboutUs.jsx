import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <FluidContainer>
            <AboutUsText>
                <h1>{t("aboutUs.title")}</h1>
                <p>{t("aboutUs.text")}</p>
            </AboutUsText>
        </FluidContainer>
    );
}

const FluidContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const AboutUsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    height: max-content;
    background-color: var(--foreground-color);
    border-radius: 10px;
    border: 1px solid var(--border-color);
    `;