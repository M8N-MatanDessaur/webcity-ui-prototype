import React, { useMemo } from 'react';
import Marquee from 'react-fast-marquee';
import { BackgroundContainer, MarqueeWrapper, Keyword } from './KeywordsBackground.styles';

const keywords = {
  en: [
    "Website Design", "UI/UX Design", "Branding", "Logo Design", "Responsive Design",
    "Website Development", "Web App Development", "E-commerce", "SEO", "API Integrations",
    "Website Maintenance", "Content Updates", "Performance Optimization", "Security Updates", 
    "Website Redesign", "Bug Fixes", "Cloud Hosting", "Digital Marketing", "Social Media Marketing", 
    "DevOps", "CI/CD"
  ],
  fr: [
    "Conception de sites Web", "Conception UI/UX", "Image de marque", "Conception de logo", "Design responsive",
    "Développement de sites Web", "Développement d'applications Web", "Commerce électronique", "Référencement", "Intégrations API",
    "Maintenance de sites Web", "Mises à jour de contenu", "Optimisation des performances", "Mises à jour de sécurité",
    "Refonte de site Web", "Correction de bugs", "Hébergement cloud", "Marketing numérique", "Marketing sur les réseaux sociaux",
    "DevOps", "CI/CD"
  ]
};

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const KeywordsBackground = ({ language = 'en' }) => {
  const shuffledKeywordSets = useMemo(() => {
    const currentKeywords = keywords[language] || keywords.en;
    return [...Array(5)].map(() => {
      let shuffled = shuffleArray(currentKeywords);
      // Ensure no consecutive repetitions
      for (let i = 1; i < shuffled.length; i++) {
        if (shuffled[i] === shuffled[i - 1]) {
          const nextDifferentIndex = shuffled.findIndex((word, index) => index > i && word !== shuffled[i]);
          if (nextDifferentIndex !== -1) {
            [shuffled[i], shuffled[nextDifferentIndex]] = [shuffled[nextDifferentIndex], shuffled[i]];
          }
        }
      }
      return shuffled;
    });
  }, [language]);

  return (
    <BackgroundContainer>
      {shuffledKeywordSets.map((shuffledKeywords, index) => (
        <MarqueeWrapper key={index}>
          <Marquee
            direction={index % 2 === 0 ? 'left' : 'right'}
            speed={20 + index * 5}
            gradient={false}
          >
            {shuffledKeywords.map((keyword, keywordIndex) => (
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