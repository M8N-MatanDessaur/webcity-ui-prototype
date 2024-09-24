import React, { memo } from "react";
import ScheduleButton from "../Components/ScheduleButton/ScheduleButton";
import { useTranslation } from "react-i18next";
import PortfolioButton from "../Components/PortfolioButton/PortfolioButton";
import { Headline, SubHeading, Blockquote, FluidContainer, BlurredOverlay } from "../Components/_Common/common.styles";
import CanvasContainer from "../Components/CanvasContainer/CanvasContainer";
import KeywordsBackground from "../Components/KeywordsBackground/KeywordsBackground";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <>
      <FluidContainer>
        <KeywordsBackground />
        <Headline>
          {t('mainText.slogan')}<br />
          <span>{t('mainText.tailored')}</span>&nbsp;{t('mainText.slogan1')}
        </Headline>
        <SubHeading>
          {t('mainText.slogan2')}&nbsp;<span>{t('mainText.workOfArt')}</span>
        </SubHeading>
        <ScheduleButton isOn={true} />
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