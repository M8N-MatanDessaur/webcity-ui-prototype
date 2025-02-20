import React, { useState, useEffect } from 'react';
import { BackToTopButton } from './BackToTop.styles';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll offset
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <BackToTopButton
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </BackToTopButton>
      )}
    </>
  );
};

export default BackToTop;
