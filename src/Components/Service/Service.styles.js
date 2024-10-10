import styled, { keyframes } from "styled-components";

export const flip3d = keyframes`
    0% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`;

export const ServiceWrapper = styled.div`
    &.in-view {
        animation: ${flip3d} 1s forwards;
    }
    perspective: 1000px;
    backface-visibility: hidden;
    width: 30%;
    height: max-content;
    height: 22em;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 35px;
    background-color: var(--foreground-color);
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 8px -2px, rgb(255 255 255 / 15%) 0px 0px 0px 1px;

    transition: all 0.1s ease-in-out;

    &:hover {
        box-shadow: 0 0 15px var(--accent-color), 0 0 5px var(--accent-color), inset 0 0 5px var(--accent-color);
        transition: all 0.1s ease-in-out;
        & svg {
            transform: scale(1.2);
            transition: all 0.2s ease-in-out;
        }
    }

    @media (max-width: 940px) {
        width: auto;
        padding: 25px;

        &:hover {
            box-shadow: none;
        }

        &:active {
            box-shadow: 0 0 15px var(--accent-color), 0 0 5px var(--accent-color), inset 0 0 5px var(--accent-color);
            transition: all 0.1s ease-in-out;
            & svg {
                transform: scale(1.2);
                transition: all 0.1s ease-in-out;
            }
        }

    }
`;

export const ServiceIcon = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: var(--text-color);
    margin-bottom: 1rem;

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const ServiceTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Outfit", sans-serif;
    font-optical-sizing: auto;
    text-align: center;
    color: var(--text-color);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }

    @media (max-width: 320px) {
        font-size: 0.5rem;
    }
`;

export const ServiceDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    color: var(--text-color);
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;