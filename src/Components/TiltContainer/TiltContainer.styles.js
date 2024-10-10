import styled from 'styled-components';

export const Outside = styled.div`
    position: relative;
    width: 100VW;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        background-size: 25%;
    }
`;

export const Tilt = styled.div`
    position: relative;
    width: max-content;
    max-height: 50%;
    width: 40%;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: #ffffffE0;
    opacity: 0.8;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    overflow: auto;

    scrollbar-width: thin;
    scrollbar-color: var(--foreground-color);

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--foreground-color);
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }

    &::-webkit-scrollbar-button {
        display: none;
    }

    @media (max-width: 680px) {
        max-height: 500px;
        min-width: unset;
        width: 90%;
        margin: 0 10px;
    }
`;
