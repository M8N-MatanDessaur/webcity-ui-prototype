import React from "react";

import { Button } from "./CallUsButton.styles";

export default function CallUsButton() {
  return (
    <Button role="button" title="CallUs">
      <a href="tel:(450)822-6026">
        <svg
          fill="none"
          stroke="var(--text-color)"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.75.75h-7.5A2.25 2.25 0 0 0 6 3v18a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 21V3A2.25 2.25 0 0 0 15.75.75Z"></path>
          <path d="M8.25.75h1.125a.375.375 0 0 1 .375.375.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75.375.375 0 0 1 .375-.375h1.125"></path>
        </svg>
        <span>(450)822-6026</span>
      </a>
    </Button>
  );
}

