import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -99;
    opacity: 0.08;
  overflow: hidden;
  --marquee-height: 20dvh;
  --pill-height: 19dvh;
  --font-size: 6dvh;
`;

export const MarqueeWrapper = styled.div`
  height: var(--marquee-height);
  display: flex;
`;

export const Keyword = styled.div`
  margin: 0 5px;
  padding: 0 calc(var(--font-size) / 2);
  background-color: transparent;
  color: #FF1493;
  font-weight: 300;
  border-radius: 9999px;
  white-space: nowrap;
  font-size: var(--font-size);
  display: flex;
  align-items: center;
  height: var(--pill-height);
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #FFD700, #FF8C00, #FF1493, #8A2BE2);
    border-radius: 9999px;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    border-radius: 9999px;
    z-index: -1;
  }
`;