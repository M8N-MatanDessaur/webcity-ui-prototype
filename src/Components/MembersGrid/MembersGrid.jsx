import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import matan_picture from "../../Assets/Images/matan.png";
import eric_picture from "../../Assets/Images/eric.png";

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 800px) {
        padding: 0;
    }
`;

const TabList = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
`;

const TabButton = styled.button`
    background: transparent;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    color: var(--text-color);
    opacity: ${props => props.isActive ? 1 : 0.6};
    position: relative;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${props => props.color};
        transform: scaleX(${props => props.isActive ? 1 : 0});
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    @media (max-width: 800px) {
        padding: 1rem;
    }
`;

const MemberCard = styled(motion.div)`
    border-radius: 20px;
    padding: 3rem;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    align-items: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 2rem 0;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.hoverGradient};
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 1;
    }

    &:hover::before {
        opacity: 1;
    }
`;

const ImageSection = styled.div`
    position: relative;
    z-index: 2;
    
    @media (max-width: 800px) {
        margin: 0 auto;
    }
`;

const MemberImage = styled(motion.img)`
    width: 250px;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const ExtraText = styled.div`
    position: absolute;
    top: -1rem;
    right: -1rem;
    background: ${props => props.color};
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 4px 12px ${props => props.shadowColor};
`;

const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    z-index: 2;
`;

const Name = styled.h3`
    font-size: 2rem;
    margin: 0;
    color: var(--text-color);
`;

const Role = styled.p`
    font-size: 1.1rem;
    color: var(--text-color);
    opacity: 0.8;
    margin: 0.5rem 0 0;
`;

const Description = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-color);
    opacity: 0.9;
    margin: 0;

    @media (max-width: 800px) {
        max-width: 400px;
    margin: auto;
    }
`;

const StyledLink = styled.a`
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: ${props => props.color};
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 500;
    box-shadow: 0 4px 12px ${props => props.shadowColor};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px ${props => props.shadowColor};
    }

    &:active {
        transform: translateY(0);
    }
`;

const members = [
    {
        id: 'matan',
        name: 'Matan Dessaur',
        role: 'Founder & Lead Developer',
        image: matan_picture,
        extraText: 'aboutUs.matanExtraText',
        description: 'aboutUs.matanText',
        link: 'https://toolbox.webcity.dev',
        color: 'linear-gradient(135deg, #6376f8 0%, rgba(99, 118, 248, 0.6) 100%)',
        solidColor: '#6376f8',
        shadowColor: 'rgba(99, 118, 248, 0.3)'
    },
    {
        id: 'eric',
        name: 'Eric Gendron',
        role: 'Full Stack Developer',
        image: eric_picture,
        extraText: 'aboutUs.ericExtraText',
        description: 'aboutUs.ericText',
        color: 'linear-gradient(135deg, #86e56d 0%, rgba(134, 229, 109, 0.6) 100%)',
        solidColor: '#86e56d',
        shadowColor: 'rgba(134, 229, 109, 0.3)'
    }
];

export default function MembersGrid() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('matan');
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayDelay = 5000; // 8 seconds

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                // Find current index and get next member
                const currentIndex = members.findIndex(member => member.id === activeTab);
                const nextIndex = (currentIndex + 1) % members.length;
                setActiveTab(members[nextIndex].id);
            }, autoPlayDelay);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, activeTab, members]);

    // Pause auto-rotation on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    const cardVariants = {
        enter: { x: 20, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -20, opacity: 0 }
    };

    return (
        <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <TabList>
                {members.map(member => (
                    <TabButton
                        key={member.id}
                        isActive={activeTab === member.id}
                        onClick={() => {
                            setActiveTab(member.id);
                            setIsAutoPlaying(false);
                        }}
                        color={member.solidColor}
                    >
                        {member.name}
                    </TabButton>
                ))}
            </TabList>

            <AnimatePresence mode="wait">
                {members.map(member => member.id === activeTab && (
                    <MemberCard
                        key={member.id}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={cardVariants}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        hoverGradient={`linear-gradient(135deg, ${member.solidColor}0A 0%, transparent 100%)`}
                    >
                        <ImageSection>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                <MemberImage src={member.image} alt={member.name} />
                            </motion.div>
                            <ExtraText color={member.color} shadowColor={member.shadowColor}>{t(member.extraText)}</ExtraText>
                        </ImageSection>

                        <ContentSection>
                            <div>
                                <Name>{member.name}</Name>
                                <Role>{member.role}</Role>
                            </div>
                            <Description>{t(member.description)}</Description>
                            {member.link && (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <StyledLink
                                        href={member.link}
                                        rel="noreferrer"
                                        color={member.color}
                                        shadowColor={member.shadowColor}
                                    >
                                        {t('aboutUs.clickHere')}
                                    </StyledLink>
                                </motion.div>
                            )}
                        </ContentSection>
                    </MemberCard>
                ))}
            </AnimatePresence>
        </Container>
    );
}