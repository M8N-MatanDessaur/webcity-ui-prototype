import styled from 'styled-components';

export const ProjectSlide = styled.div`
    position: relative;
    width: 100vw;
    height: 60vh;
    display: flex;
    background: #fff;
    
    @media (max-width: 1024px) {
        height: auto;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        margin-bottom: -2rem; /* Reduce space between slides */
    }
`;

export const ProjectImage = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    padding: 0 4rem;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,0), #fff);
        pointer-events: none;
    }

    img {
        width: 100%;
        height: 250%;
        object-fit: cover;
        display: block;
        will-change: transform;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 35vh;
        min-height: 280px;

        &::after {
            width: 100%;
            height: 30%;
            top: auto;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(255,255,255,0), #fff);
        }

        img {
            height: 130%;
        }
    }

    @media (max-width: 768px) {
        height: 30vh;
        min-height: 200px;
    }
`;

export const ProjectContent = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
    background: #fff;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 2rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 1.5rem 4.25rem;
    }
`;

export const ProjectTitle = styled.h3`
    font-family: "Outfit", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin: 0 0 1.5rem;
    color: #1a1a1a;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 1.75rem;
        margin: 0 0 1rem;
    }
`;

export const ProjectDescription = styled.p`
    font-family: "Outfit", sans-serif;
    font-size: clamp(1rem, 1.2vw, 1.2rem);
    line-height: 1.6;
    color: #666;
    margin: 0 0 2rem;
    max-width: 600px;

    @media (max-width: 1024px) {
        margin: 0 auto 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: 0.95rem;
        margin: 0 auto 1rem;
        line-height: 1.5;
    }
`;

export const ProjectLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #FF1493 0%, #FF69B4 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-family: "Outfit", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 2rem;
    width: fit-content;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(255, 20, 147, 0.15);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 30px rgba(255, 20, 147, 0.25);
    }

    @media (max-width: 1024px) {
        margin: 1.5rem auto 0;
    }

    @media (max-width: 768px) {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
        margin: 1rem auto 0;
    }
`;

export const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 1rem 0;
    max-width: 500px;

    @media (max-width: 1024px) {
        justify-content: center;
        margin: 1.5rem 0;
    }

    @media (max-width: 768px) {
        gap: 0.5rem;
        margin: 1rem 0;
    }
`;

export const TechTag = styled.span`
    padding: 0.6rem 1.2rem;
    background: rgba(255, 20, 147, 0.08);
    border: 1px solid rgba(255, 20, 147, 0.2);
    border-radius: 50px;
    font-family: "Outfit", sans-serif;
    font-size: 0.9rem;
    color: #FF1493;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 20, 147, 0.12);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }
`;
