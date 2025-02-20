import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 2rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`;

export const MemberCard = styled.div`
    position: relative;
    width: 100%;
    background: var(--foreground-color);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover::before {
        opacity: 1;
    }
`;

export const MemberPicture = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 4px solid var(--foreground-color);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    background: var(--background-color);
    z-index: 1;
`;

export const ExtraText = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, #FF1493 0%, rgba(255, 20, 147, 0.6) 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(255, 20, 147, 0.2);
`;

export const CardHeader = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
    z-index: 1;
`;

export const CardHeaderText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const CardHeaderTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
    line-height: 1.2;
`;

export const CardHeaderSubtitle = styled.p`
    font-size: 1rem;
    color: var(--text-color);
    opacity: 0.8;
    margin: 0;
`;

export const CardBody = styled.div`
    width: 100%;
    text-align: center;
    z-index: 1;
`;

export const CardBodyText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-color);
    opacity: 0.9;
    margin-bottom: 1.5rem;
`;

export const LinkAlt = styled(Link)`
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, #FF1493 0%, rgba(255, 20, 147, 0.6) 100%);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(255, 20, 147, 0.2);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(255, 20, 147, 0.3);
    }

    &:active {
        transform: translateY(0);
    }
`;