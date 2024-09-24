import styled from 'styled-components';

export const Container = styled.div`
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
  margin: 4rem 0;
  opacity: 0;
  transform: translateY(30px);
  margin-bottom: 2rem;
  transition: opacity var(--transition-duration) var(--transition-timing),
              transform var(--transition-duration) var(--transition-timing);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LoadingPlaceholder = styled.div`
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