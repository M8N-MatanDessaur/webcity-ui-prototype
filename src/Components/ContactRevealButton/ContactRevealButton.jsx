import React, { useState } from "react";
import MailUsButton from "../EmailUsButton.js/EmailUsButton";
import CallUsButton from "../CallUsButton/CallUsButton";

import { Button } from "./ContactRevealButton.styles";

export default function ContactRevealButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked && (
        <>
          <MailUsButton />
          <CallUsButton />
        </>
      )}
      <Button onClick={handleClick} isClicked={isClicked}>
        <svg fill="var(--text-color)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41Z"></path>
        </svg>
      </Button>
    </>
  );
}

