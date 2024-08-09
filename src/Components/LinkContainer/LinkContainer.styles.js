import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 650px;
    height: max-content;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background: var(--foreground-color);
    opacity: 0.8;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        padding: 15px 20px;
        border-bottom: 1px solid var(--text-color);
        border-top: 1px solid var(--text-color);
        background: var(--foreground-color);
        box-shadow: 0px 40px 100px var(--accent-color);

        &:first-child {
            border-top: none;
        }

        &:last-child {
            border-bottom: none;
        }

        & a {
            transform: scale(1.1) translateX(10px);
            transition: all 0.1s ease-in-out;
        }

        & p {
            transform: scale(0.98) translateX(-5px);
            opacity: 0.8;
            transition: all 0.1s ease-in-out;
        }
    }

    @media (max-width: 680px) {
        width: 100%;
    }
    `;

export const LinkTitle = styled.a`
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;

    @media (max-width: 680px) {
         font-size: 1rem;
    }
    `;

export const LinkDescription = styled.p`
    color: var(--text-color);
    font-size: 0.9rem;
    font-weight: 400;

    @media (max-width: 680px) {
       font-size: 0.7rem;
       text-align: right;
    }
    `;
