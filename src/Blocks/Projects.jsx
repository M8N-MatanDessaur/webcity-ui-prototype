import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FluidContainer, Heading } from "../Components/_Common/common.styles";
import Project from "../Components/Project/Project";

import groupeleclerc from "../Assets/Images/media/groupeleclerc.png";
import cdc from "../Assets/Images/media/cdc.png";
import whatsaround from "../Assets/Images/media/whatsaround.png";
import builderio from "../Assets/Images/media/ice.png";

const ProjectsSection = styled.section`
    position: relative;
    width: 100%;
    background: #fff;
    overflow: hidden;
`;

const ProjectsHeader = styled.div`
    padding: 0rem 2rem 3rem;
    text-align: center;
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 200%;
        height: 100%;
        z-index: -1;
    }
`;

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const CarouselTrack = styled(motion.div)`
    display: flex;
    width: 100%;
`;

const Dots = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    background: #fff;
`;

const Dot = styled.button`
    width: ${props => props.active ? '2rem' : '0.5rem'};
    height: 0.5rem;
    border-radius: 1rem;
    border: none;
    background: ${props => props.active ? 
        'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)' : 
        'rgba(0, 0, 0, 0.1)'};
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;

    &:hover {
        background: ${props => props.active ?
            'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)' :
            'rgba(0, 0, 0, 0.2)'};
    }
`;

const projectsList = [
    {
        title: "Groupe Leclerc",
        description: {
            en: "A modern website for an architecture & Design firm, featuring a clean design and intuitive navigation to showcase their services and projects.",
            fr: "Un site web moderne pour une entreprise d'architecture et de conception, avec un design épuré et une navigation intuitive pour présenter leurs services et projets."
        },
        image: groupeleclerc,
        url: "https://groupeleclerc.net/",
        techStack: ["React", "Styled Components", "Sanity"]
    },
    {
        title: "CDC Rivière-du-Nord",
        description: {
            en: "A modern website for community development, featuring resources and information about local initiatives, blogs, and programs.",
            fr: "Un site web moderne pour le développement communautaire, offrant des ressources et des informations sur les initiatives, blogs et programmes locaux."
        },
        image: cdc,
        url: "https://cdcrdn.org/",
        techStack: ["React", "Styled Components", "Sanity", "Framer Motion"]
    },
    {
        title: "Whatsaround Template",
        description: {
            en: "A showcase of modern web development capabilities using React, Styled Components, and Framer Motion.",
            fr: "Une démonstration des capacités de développement web moderne utilisant React, Styled Components et Framer Motion."
        },
        image: whatsaround,
        url: "https://whatsaround.netlify.app/",
        techStack: ["React", "Styled Components", "Framer Motion", "Google Maps API", "MapBox"]
    },
    {
        title: "Builder.io Template",
        description: {
            en: "A showcase of modern web development capabilities using the Builder.io platform for visual content management and Next.js for server-side rendering.",
            fr: "Une démonstration des capacités de développement web moderne utilisant la plateforme Builder.io pour la gestion de contenu visuel et Next.js pour le rendu côté serveur."
        },
        image: builderio,
        url: "https://builderio-site-demo.netlify.app/",
        techStack: ["Builder.io", "Next.js", "Css modules", "Framer Motion", "MapBox"]
    }
];

export default function Projects() {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayDelay = 6000; // 8 seconds

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => 
            prevIndex === projectsList.length - 1 ? 0 : prevIndex + 1
        );
    }, []);

    useEffect(() => {
        let intervalId;
        
        if (isAutoPlaying) {
            intervalId = setInterval(nextSlide, autoPlayDelay);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoPlaying, nextSlide]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of user inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    return (
        <ProjectsSection id="projects">
            <ProjectsHeader>
                <Heading>
                    {t("mainText.portfolio")}
                </Heading>
            </ProjectsHeader>
            
            <CarouselContainer 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <AnimatePresence mode="wait">
                    <CarouselTrack
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Project 
                            title={projectsList[currentIndex].title} 
                            description={projectsList[currentIndex].description[i18n.language]} 
                            image={projectsList[currentIndex].image} 
                            url={projectsList[currentIndex].url} 
                            techStack={projectsList[currentIndex].techStack} 
                        />
                    </CarouselTrack>
                </AnimatePresence>
            </CarouselContainer>

            <Dots>
                {projectsList.map((_, index) => (
                    <Dot
                        key={index}
                        active={index === currentIndex}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </Dots>
        </ProjectsSection>
    );
}