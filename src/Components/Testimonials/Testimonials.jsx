import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer, Heading } from '../_Common/common.styles';

const TestimonialsContainer = styled(SectionContainer)`
  padding: 4rem 2rem;
  background: var(--bg-color);
  color: var(--text-color);
  overflow: hidden;
`;

const TestimonialCard = styled(motion.div)`
  background: var(--card-bg-color, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  position: relative;
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  
  &::before {
    content: '"';
    font-size: 8rem;
    position: absolute;
    top: -2rem;
    left: 2rem;
    opacity: 0.1;
    font-family: "Outfit", sans-serif;
    background: linear-gradient(135deg, #FF1493, #FF69B4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: "Outfit", sans-serif;
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--text-color);
    opacity: 0.9;
    margin: 1rem 0;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  padding-top: 1.5rem;
`;

const ClientImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
  border: 2px solid #FF1493;
`;

const ClientDetails = styled.div`
  h4 {
    margin: 0;
    color: var(--text-color);
    font-family: "Outfit", sans-serif;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: var(--text-color);
    opacity: 0.7;
    font-size: 0.9rem;
    font-family: "Outfit", sans-serif;
  }
`;

const testimonials = [
  {
    id: 1,
    text: "WebCity transformed our online presence completely. Their attention to detail and innovative approach helped us stand out in our industry.",
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    text: "The team's expertise in modern web technologies and design principles is exceptional. They delivered beyond our expectations.",
    name: "Michael Chen",
    position: "Marketing Director, InnovateCo",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    text: "Working with WebCity was a game-changer for our business. Their creative solutions and professional approach made the entire process smooth.",
    name: "Emma Davis",
    position: "Founder, CreativeHub",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <TestimonialsContainer>
      <Heading style={{ textAlign: 'center', marginBottom: '3rem' }}>Client Testimonials</Heading>
      <AnimatePresence mode="wait">
        <TestimonialCard
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {testimonials[currentIndex].text}
          </motion.p>
          <ClientInfo>
            <ClientImage 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name} 
            />
            <ClientDetails>
              <h4>{testimonials[currentIndex].name}</h4>
              <p>{testimonials[currentIndex].position}</p>
            </ClientDetails>
          </ClientInfo>
        </TestimonialCard>
      </AnimatePresence>
    </TestimonialsContainer>
  );
};

export default Testimonials;
