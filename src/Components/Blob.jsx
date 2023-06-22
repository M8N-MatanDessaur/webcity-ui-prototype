import React, { useRef, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";

// Obtain the user's preferred mode (light or dark)
const userPreferredMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
let colors = [];
// Update the CSS variables based on the user's preferred mode
if (userPreferredMode === "light") {
  colors = ["#4EA5D9", "#EFCA08", "#F87575"];
} else if (userPreferredMode === "dark") {
  colors = [ "#992C2C","#4C2C69", "#874000"];
}

const liquidAnimation = keyframes`
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

const BlobContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
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
    width: 400px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 200px;
  }
`;

const InnerBlob = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: inherit;
  background: linear-gradient(to bottom right, ${colors[0]}, ${colors[1]}, ${colors[2]});
`;

const OuterBlob = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  overflow: hidden;
  background: linear-gradient(to bottom right, ${colors[1]}, ${colors[2]}, ${colors[0]});
`;

export default function Blob() {
  const blobRef = useRef(null);
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);

    const currentRef = blobRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleIntersection]);

  return (
    <BlobContainer ref={blobRef} className="blob">
      <InnerBlob />
      <OuterBlob />
    </BlobContainer>
  );
}
