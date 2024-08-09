import React, { memo } from "react";
import Blob from "../Components/Blob/Blob";
import ScrollArrow from "../Components/ScrollArrow/ScrollArrow";
import ScheduleButton from "../Components/ScheduleButton/ScheduleButton";
import { useTranslation } from "react-i18next";
import PortfolioButton from "../Components/PortfolioButton/PortfolioButton";
import { Headline, SubHeading, Blockquote, FluidContainer, BlurredOverlay } from "../Components/_Common/common.styles";
import CanvasContainer from "../Components/CanvasContainer/CanvasContainer";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <>
      <FluidContainer>
        <Blob />
        <BlurredOverlay />
        <Headline>
          {t('mainText.slogan')}<br />
          {t('mainText.slogan1')}
        </Headline>
        <SubHeading>
          {t('mainText.slogan2')}
        </SubHeading>
        <ScheduleButton isOn={true} />
        <ScrollArrow />
      </FluidContainer>
      <CanvasContainer>
        <Blockquote>
          {t('mainText.offeringText')} {t('mainText.offeringText2')}
          <PortfolioButton isOn={true} />
        </Blockquote>
      </CanvasContainer>
    </>
  );
}

export default memo(Landing);