import React from "react";
import { useTranslation } from "react-i18next";
import { SecondaryButton } from "../_Common/common.styles";

export default function PortfolioButton({ isOn }) {
  const { t } = useTranslation();

  const goToPortfolio = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if the element is not found
      window.location.hash = '#portfolio';
    }
  };

  return (
    <SecondaryButton isOn={isOn} onClick={goToPortfolio} role="button" title="Portfolio">
      {t('buttonText.ourRecentWork')}
    </SecondaryButton>
  );
}
