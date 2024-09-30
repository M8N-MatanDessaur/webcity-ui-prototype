import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  display: block;

@media (max-width: 768px) {
    font-size: 1.2rem;
}

@media (max-width: 380px) {
    font-size: 1rem;
}
`;

export const Indicator = styled.div`
    height: 60px;
    border: none;
    position: fixed;
    bottom: 35px;
    right: 35px;
    color: #FF1493;
    z-index: 998;
    -webkit-border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        bottom: 25px;
        right: 25px;
        height: 40px;
    }
`;

