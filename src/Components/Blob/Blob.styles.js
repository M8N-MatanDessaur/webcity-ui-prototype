import styled, { keyframes } from "styled-components";

const colors = ["#ff9900", "#ff00a8", "#ff9900"];

export const liquidAnimation = keyframes`
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 0 10px 20px rgba(78, 165, 217, 0.2), 0 6px 6px rgba(78, 165, 217, 0.2);
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
    box-shadow: 0 10px 20px rgba(239, 202, 8, 0.2), 0 6px 6px rgba(239, 202, 8, 0.2);
    transform: translate(-50%, -50%) rotate(180deg) scale(1.08);
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 0 10px 20px rgba(248, 117, 117, 0.2), 0 6px 6px rgba(248, 117, 117, 0.2);
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
  }
`;

export const BlobContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props)=>props.width || 600}px;
  height: ${(props)=>props.height || 600}px;
  background-color: transparent;
  animation: ${liquidAnimation} 6s cubic-bezier(.78,.23,.2,.77) infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: black;
  }

  @media (max-width: 768px) {
      width: ${(props)=>props.width || 400}px;
  height: ${(props)=>props.height || 400}px;
  }

  @media (max-width: 480px) {
     width: ${(props)=>props.width || 300}px;
  height: ${(props)=>props.height || 300}px;
  }

  @media (max-width: 320px) {
     width: ${(props)=>props.width || 200}px;
  height: ${(props)=>props.height || 200}px;
  }
`;

export const InnerBlob = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: inherit;
  background: linear-gradient(to bottom right, ${colors[0]}, ${colors[1]}, ${colors[2]});
`;

export const OuterBlob = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  overflow: hidden;
  background: linear-gradient(to bottom right, ${colors[1]}, ${colors[2]}, ${colors[0]});
`;