import styled from 'styled-components';

export const Outside = styled.div`
    position: relative;
    width: 100%;
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
    max-height: 450px;
    display: flex;
    flex-direction: column;
    background: var(--foreground-color);
    opacity: 0.8;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--text-color) var(--foreground-color);
    &::-webkit-scrollbar {
        width: 12px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }
    &::-webkit-scrollbar-button:single-button:vertical:decrement{
        display: none;
    }
    &::-webkit-scrollbar-button:single-button:vertical:increment{
        display: none;
    }

    @media (max-width: 680px) {
        max-height: 500px;
        width: 90%;
        margin: 0 10px;
    }
    `;
