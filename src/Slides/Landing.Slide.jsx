import React, { useEffect, useRef, useState, memo, lazy, Suspense } from "react";
import styled, { keyframes, css } from "styled-components";
import Blob from "../Components/Blob/Blob";
import ScrollArrow from "../Components/ScrollArrow/ScrollArrow";
import ScheduleButton from "../Components/ScheduleButton/ScheduleButton";
import { useTranslation } from "react-i18next";
import PortfolioButton from "../Components/PortfolioButton/PortfolioButton";

const LazySpline = lazy(() => import('@splinetool/react-spline'));

const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const Landing = () => {
  const offeringRef = useRef(null);
  const [isSplineVisible, setIsSplineVisible] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setIsSplineVisible(true);
        } else {
          entry.target.classList.remove('visible');
          setIsSplineVisible(false);
        }
      },
      OBSERVER_OPTIONS
    );
  
    if (offeringRef.current) {
      observer.observe(offeringRef.current);
    }
  
    return () => {
      if (offeringRef.current) {
        observer.unobserve(offeringRef.current);
      }
    };
  }, []);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  return (
    <LandingContainer>
      <FluidContainer>
        <Blob />
        <BlurredOverlay />
        <StyledSlogan>
          {t('mainText.slogan')}<br />
          {t('mainText.slogan1')}
        </StyledSlogan>
        <StyledQuote>
          {t('mainText.slogan2')}
        </StyledQuote>
        <ScheduleButton isOn={true} />
        <ScrollArrow />
      </FluidContainer>

      <StyledOffering ref={offeringRef}>
        {isSplineVisible && (
          <Suspense fallback={<LoadingPlaceholder></LoadingPlaceholder>}>
            <LazySpline
              scene="https://prod.spline.design/Uq-svW2LpfK3vn4h/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: isSplineLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-out',
              }}
              onLoad={handleSplineLoad}
            />
          </Suspense>
        )}
        <OfferingQuote>
          {t('mainText.offeringText')} {t('mainText.offeringText2')}
          <PortfolioButton isOn={true} />
        </OfferingQuote>
      </StyledOffering>
    </LandingContainer>
  );
}

export default memo(Landing);

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blurCardColor);
  color: var(--text-color);
  font-size: 1.2rem;
`;

const BlurredOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(40px);
`;

const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
`;

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

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledSlogan = styled.h1`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
  color: var(--text-color);
  width: fit-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 500ms ease-in;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const StyledQuote = styled.h3`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  color: var(--text-color);
  width: fit-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 500ms ease-in;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const StyledOffering = styled.div`
  --transition-duration: 0.5s;
  --transition-timing: ease-out;

  background: transparent;
  color: var(--text-color);	
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--transition-duration) var(--transition-timing),
              transform var(--transition-duration) var(--transition-timing);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const OfferingQuote = styled.blockquote`
  width: 100vw;
  height: 100%;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  background: var(--blurCardColor);
  backdrop-filter: blur(5px);
  padding: 30px 20rem;
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
  line-height: 1.5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  opacity: 0;

  transition: opacity var(--transition-duration) var(--transition-timing),
              transform var(--transition-duration) var(--transition-timing);

  .visible & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 30px 30px;
  }
`;