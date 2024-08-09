import React from "react";

import { FloatingContainer, LogoContainer, LogoText, LogoIcon } from "./InteractiveLogo.styles";

export default function InteractiveLogo() {
  return (
    <FloatingContainer>
      <LogoContainer>
        <LogoText type="text" placeholder="webcity" spellCheck="false" />
        <LogoIcon fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"></path>
        </LogoIcon>
      </LogoContainer>
    </FloatingContainer>
  );
}