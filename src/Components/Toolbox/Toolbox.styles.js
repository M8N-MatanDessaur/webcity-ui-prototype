import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 100%;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    `;


export const BlurredOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(40px);
`;

export const Glassbox = styled.div`
    position: relative;
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background: var(--foreground-color);
    opacity: 0.8;
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    `;

export const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    text-align: center;
    padding: 35px;
    height: 100%;
    width: 100%;
    gap: 15px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--text-color) var(--foreground-color);
    &::-webkit-scrollbar {
        width: 12px;
    }
    &::-webkit-scrollbar-track {
        background: var(--foreground-color);
        border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Category = styled.a`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 25px;
    margin: 15px 0;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--foreground-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;

    & svg {
        width: 30%;
        height: 30%;
    }

    &:hover {
        border-color: var(--text-color);
        transform: scale(1.02);
        transition: all 0.1s ease-in-out;
        cursor: pointer;

        & svg {
            transform: scale(1.2);
            transition: all 0.15s ease-in-out;
        }
    }

    &:active {
        border-color: var(--border-color);
        transform: scale(0.98);
        transition: all 0.1s ease-in-out;
    }
    `;

export const CategoryTitle = styled.h2`
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 700;

    @media (max-width: 560px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 0.8rem;
    }

    @media (max-width: 320px) {
        font-size: 0.7rem;
    }
    `;
