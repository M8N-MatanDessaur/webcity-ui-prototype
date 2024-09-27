import styled, { keyframes } from 'styled-components';

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
    font-size: 6rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem;
    color: var(--text-color);
    width: fit-content;
    height: max-content;
    animation: ${fadeInAnimation} 500ms ease-in;

    & span {
      display: inline-block;
      color: #FF1493;
      font-weight: 700;
      font-style: italic;
    }

    @media (max-width: 1440px) {
      font-size: 5rem;
    }

    @media (max-width: 1024px) {
      font-size: 4rem;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
      padding: 0.2rem;
    }

    @media (max-width: 320px) {
      font-size: 2rem;
    }
`;

export const Heading = styled.h2`
    font-size: 2rem;
    color: var(--text-color);
     text-align: ${({ notCentered }) => (notCentered ? "left" : "center")};
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
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  color: var(--text-color);
  width: fit-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInAnimation} 500ms ease-in;
  font-style: italic;

  & span {
    display: inline-block;
    color: #FF1493;
    font-weight: 700;
    font-style: italic;
  }

  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

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
    max-width: 960px;
`;

export const Blockquote = styled.div`
  width: 100vw;
  height: 100%;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  background: var(--blurCardColor);
  backdrop-filter: blur(5px);
  font-size: 1.6rem;
  font-weight: 300;
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

  & p {
    font-size: 1.5rem;
    font-weight: 300;
    max-width: 990px;
    padding: 0 2rem;
    text-align: center;

    @media (max-width: 1440px) {
      font-size: 1.4rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  & q {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 1rem;
    font-style: italic;
    max-width: 960px;
    padding: 0 2rem;

    &:before {
      content: "— ";
    }

    &:after {
      content: "";
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }


  & h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
     text-align: center;
     padding: 0 2rem;

    @media (max-width: 1440px) {
      font-size: 1.8rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.6rem;
    }

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;


export const FluidContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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

export const ErrorContainer = styled(FluidContainer)`
margin: auto;
height: 80vh;
max-width: 960px;
justify-content: center;
align-items: center;

aside {
flex: unset;
margin: 2rem 0;
padding: 0 2rem;
}
`

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

export const BlocksContainer = styled.div`
    width: 100%;
    height: max-content;
    padding: 150px 2rem;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 120px 1rem;
    }

  @media (min-width: 1200px) {
    max-width: 1200px
  }

   @media (min-width: 1440px) {
    max-width: 90%;
  }

    @media (min-width: 1800px) {
    max-width: 1800px;
  }

    `;

  export const WallpaperWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: 
  linear-gradient(rgba(255, 20, 147, 0.05) 1px, transparent 1px), 
  linear-gradient(to right, rgba(255, 20, 147, 0.1) 1px, rgba(255, 255, 255, 0) 1px);
  background-position: 0 0, 0 0;
  background-size: 20px 20px, 20px 20px;
  background-repeat: repeat, repeat;
  background-color: white; /* Add a white background to ensure contrast */
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

export const PrimaryButton = styled.button`
  font-family: Poppins, sans-serif;
  display: ${({ isOn }) => (isOn ? "flex" : "none")};
  width: max-content;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  backdrop-filter: blur(5px);
  color: #fff;
  border-radius: 999px;
  border: none;
  background-color: ${({ alt }) => (alt ? "#000" : "#FF1493")};
  font-size: 1.5rem;
  font-weight: 300;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  z-index: 1;
  animation: ${({ isOn }) => (isOn ? fadeInAnimation : "none")} 500ms ease-in-out forwards;

  &:hover {
    filter:drop-shadow(0 10px 10px #00000030);
  }

  @media (max-width: 768px) {
    width: max-content;
    font-size: 1.2rem;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #000;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;

   @media (max-width: 768px) {
    width: max-content;
    font-size: 1.2rem;
  }
  `;

export const TertiaryButton = styled(SecondaryButton)`
  background-color: transparent;
  aspect-ratio: 1/1;
  height: 4rem;
  width: 4rem;
  color: #000;
  border: 2px solid #000;
  padding: 0.5rem;
  font-size: 1.5rem;

   @media (max-width: 768px) {
    width: max-content;
    font-size: 1.2rem;
  }

  & svg {
    fill: #000;
    height: 2rem;
    width: 2rem;
  }

  `;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  `;

export const QuotedText = styled.q`
  font-family: Poppins, sans-serif;
  font-size: 1.8rem;
  font-weight: 200;
  margin-bottom: 0.5rem;
 font-style: italic;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;