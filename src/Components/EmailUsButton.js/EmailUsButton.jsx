import React from "react";

import { Button } from "./EmailUsButton.styles";

export default function MailUsButton() {
  return (
    <Button role="button">
      <a href="mailto:info@webcity.dev">
        <svg
          fill="var(--text-color)"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10v1.43C22 15.4 20.47 17 18.5 17c-1.19 0-2.31-.58-2.96-1.47-.9.91-2.16 1.47-3.54 1.47-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5v1.43c0 .79.71 1.57 1.5 1.57s1.5-.78 1.5-1.57V12c0-4.34-3.66-8-8-8s-8 3.66-8 8 3.66 8 8 8h5v2h-5C6.48 22 2 17.52 2 12Zm7 0c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>info@webcity.dev</span>
      </a>
    </Button>
  );
}