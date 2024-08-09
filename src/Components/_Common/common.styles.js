import styled, {keyframes} from 'styled-components';

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Headline = styled.h1`
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
      padding: 1rem;
    }

    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
`;

export const Heading = styled.h2`
    font-size: 2rem;
    color: var(--text-color);
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const AltHeading = styled.h2`
 font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-size: 3rem;
  font-weight: 600;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;

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

export const SubHeading = styled.h3`
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
    max-width: 80%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

export const Paragraph = styled.p`
    font-size: 1rem;
    color: var(--text-color);
    max-width: 80%;
`;

export const Blockquote = styled.blockquote`
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


export const FluidContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 35px;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

export const FullScreenContainer = styled.div`
    position: relative;
    height: 100%;
    height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;


export const GridContainer = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }

    @media (max-width: 320px) {
        padding: 0.5rem;
    }
`;

export const RelativeContainer = styled.div`
    position: relative;
`;

export const BlurredOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(40px);
`;

export const Separator = styled.hr`
width: 30%;
border:none;
height: 1px;
background-color: var(--border-color);
margin: 25px;
`;

export const FadeImage = styled.img`
    width: 100%;
    display: block;
    padding: 0.5rem;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.fade-in {
        opacity: 1;
    }
`;