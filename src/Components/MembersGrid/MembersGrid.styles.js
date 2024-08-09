import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridWrapper = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 75px;
    padding: 35px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
        padding: 35px;
        gap: 35px;
    }

    &::-webkit-scrollbar {
        width: 10px;
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }
`;

export const MemberCard = styled.div`
    position: relative;
    width: 450px;
    height: max-content;
    min-height: 260px;
    padding: 25px;
    margin: 15px 0;
    border: 1px solid var(--border-color);    
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 800px) {
        height: max-content;
        min-height: 0;
    }
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow: hidden;
    color: var(--text-color);
    font-weight: bold;
`;

export const MemberPicture = styled.img`
    position: absolute;
    top: -35px;
    left: -35px;
    width: 100px;
    background-color: transparent;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    z-index: 1;

    &:hover {
        transform: scale(1.08);
        transition: all 0.1s ease-in-out;
    }

    @media (max-width: 768px) {
        width: 75px;
        top: -25px;
        left: -25px;
    }

`;

export const CardHeaderText = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: var(--text-color);
    font-size: 1rem;
    font-weight: bold;
`;

export const CardHeaderTitle = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const CardHeaderSubtitle = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    color: var(--text-color);
    opacity: 0.8;
    font-size: 0.8rem;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

    @media (max-width: 480px) {
        font-size: 0.6rem;
    }
`;

export const CardBody = styled.div`    
    position: relative;
    width: 100%;
    height: 80%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 18px;
    font-weight: bold;
`;

export const CardBodyText = styled.div`    
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: auto;
    color: var(--text-color);
    font-size: 0.9rem;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }

    &::-webkit-scrollbar {
        width: 10px;
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--foreground-color);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--text-color);
        border-radius: 20px;
        border: 3px solid var(--foreground-color);
    }
`;

export const ExtraText = styled.h2`
    position: absolute;
    top: -18px;
    left: 75px;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(text-color);

    @media (max-width: 480px) {
        left: 55px;
    }
    `;


    export const LinkAlt = styled(Link)`
    text-decoration: none;
    align-self: flex-start;
    font-size: 1rem;
    color: #6376f8;
    font-weight: 600;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: var(--text-color);
        transition: all 0.2s ease-in-out;
    }
`;