import React from 'react';
import Marquee from 'react-fast-marquee';
import { BackgroundContainer, MarqueeWrapper, Keyword } from './KeywordsBackground.styles';

const keywords = [
    "Website Design", "UI/UX Design", "Branding", "Logo Design", "Responsive Design",
    "Website Development", "Web App Development", "E-commerce", "SEO", "API Integrations",
    "Website Maintenance", "Content Updates", "Performance Optimization", "Security Updates", 
    "Website Redesign", "Bug Fixes", "Cloud Hosting", "Digital Marketing", "Social Media Marketing", 
    "DevOps", "CI/CD"
  ];
  

const KeywordsBackground = () => {
  return (
    <BackgroundContainer>
      {[...Array(5)].map((_, index) => (
        <MarqueeWrapper key={index}>
          <Marquee
            direction={index % 2 === 0 ? 'left' : 'right'}
            speed={20 + index * 5}
            gradient={false}
          >
            {keywords.map((keyword, keywordIndex) => (
              <Keyword key={keywordIndex}>
                {keyword}
              </Keyword>
            ))}
          </Marquee>
        </MarqueeWrapper>
      ))}
    </BackgroundContainer>
  );
};

export default KeywordsBackground;