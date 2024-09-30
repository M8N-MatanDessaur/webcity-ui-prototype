import React from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../_Common/common.styles";
import { useModal } from "../../Hooks/useModal";

export default function ScheduleButton({ isOn, alt }) {
  const { t } = useTranslation();
  const { setIsModalOpen } = useModal();

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <PrimaryButton 
      alt={alt} 
      isOn={isOn} 
      onClick={handleButtonClick} 
      role="button" 
      title="Schedule"
    >
      {t('buttonText.scheduling')}
    </PrimaryButton>
  );
}