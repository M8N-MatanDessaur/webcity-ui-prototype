import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FloatingHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 85%;
    max-width: 960px;
    position: fixed;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    background-color: #ffffffE0;
    backdrop-filter: blur(5px);
    border-radius: 50px;
`;

export const Logo = styled.img`
    width: 50px;
    margin-right: auto;
    aspect-ratio: 1/1;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    color: #000000;
    font-weight: 600;
    margin-right: 1.3rem;
    cursor: pointer;
`;

export const NavCta = styled(Link)`
    padding: 0.5rem 1rem;
    background-color: #FF1493;
    color: #ffffff;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
`;