import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionContainer, GridContainer, Heading } from '../_Common/common.styles';

const StatsContainer = styled(SectionContainer)`
  padding: 6rem 2rem;
  background: var(--bg-color);
  color: var(--text-color);
`;

const StatsGrid = styled(GridContainer)`
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: var(--card-bg-color, rgba(255, 255, 255, 0.05));
  border-radius: 15px;  
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h2`
  font-family: "Outfit", sans-serif;
  font-size: 3.5rem;
  margin: 0;
  background: linear-gradient(135deg, #FF1493, #FF69B4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const StatLabel = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 1.1rem;
  color: var(--text-color);
  margin: 0.5rem 0 0;
  opacity: 0.8;
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #FF1493;
`;

const easeOutSpring = {
  type: "spring",
  damping: 10,
  stiffness: 100
};

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const stats = [
    {
      icon: "🚀",
      value: 150,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      icon: "🏆",
      value: 98,
      label: "Satisfaction Rate",
      suffix: "%"
    },
    {
      icon: "👥",
      value: 50,
      label: "Happy Clients",
      suffix: "+"
    },
    {
      icon: "⭐",
      value: 15,
      label: "Years Experience",
      suffix: "+"
    }
  ];

  const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
      if (inView) {
        let startTime;
        let animationFrame;

        const animation = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = (timestamp - startTime) / 2000;

          if (progress < 1) {
            setCount(Math.floor(value * progress));
            animationFrame = requestAnimationFrame(animation);
          } else {
            setCount(value);
          }
        };

        animationFrame = requestAnimationFrame(animation);
        controls.start({ scale: 1, opacity: 1 });

        return () => {
          cancelAnimationFrame(animationFrame);
        };
      }
    }, [inView, value, controls]);

    return (
      <StatNumber>
        {count}
        {suffix}
      </StatNumber>
    );
  };

  return (
    <StatsContainer>
      <Heading style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Impact in Numbers</Heading>
      <StatsGrid ref={ref}>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ ...easeOutSpring, delay: index * 0.1 }}
          >
            <Icon>{stat.icon}</Icon>
            <Counter value={stat.value} suffix={stat.suffix} />
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>
    </StatsContainer>
  );
};

export default Statistics;
