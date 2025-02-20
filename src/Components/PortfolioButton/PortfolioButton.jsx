import React from "react";
import { useTranslation } from "react-i18next";
import { SecondaryButton } from "../_Common/common.styles";

export default function PortfolioButton({ isOn }) {
  const { t } = useTranslation();

  const goToPortfolio = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if the element is not found
      window.location.hash = '#projects';
    }
  };

  return (
    <SecondaryButton isOn={isOn} onClick={goToPortfolio} role="button" title="Portfolio">
      {t('buttonText.ourRecentWork')}
    </SecondaryButton>
  );
}
