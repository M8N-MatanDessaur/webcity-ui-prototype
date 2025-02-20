import styled from "styled-components";

export const ServiceWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 320px;
    padding: 2rem;
    background: var(--card-bg-color, rgba(255, 255, 255, 0.02));
    border-radius: 24px;
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
    overflow: hidden;
    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            circle at top right,
            rgba(255, 20, 147, 0.15),
            transparent 50%
        );
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover::before {
        opacity: 1;
    }

    @media (max-width: 940px) {
        min-height: 280px;
        padding: 1.5rem;
    }
`;

export const ServiceContent = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
`;

export const ServiceIcon = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(255, 20, 147, 0.2), rgba(255, 20, 147, 0.1));
    border-radius: 16px;
    padding: 0.75rem;

    svg {
        width: 100%;
        height: 100%;
        color: #FF1493;
    }

    @media (max-width: 940px) {
        width: 3rem;
        height: 3rem;
    }
`;

export const ServiceTitle = styled.h3`
    font-family: "Outfit", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
    background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 940px) {
        font-size: 1.25rem;
    }
`;

export const ServiceDescription = styled.p`
    font-family: "Outfit", sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-color);
    opacity: 0.8;
    margin: 0;
    max-width: 90%;

    @media (max-width: 940px) {
        font-size: 0.9rem;
        max-width: 100%;
    }
`;