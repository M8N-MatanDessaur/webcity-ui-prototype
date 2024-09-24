import styled from 'styled-components';

export const BlurerdContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    z-index: -1;
    filter: blur(50px);
`;

export const YourProject = styled.div`
    position: relative;
    height: 100%;
    min-height: 500px;
    width: 100%;
    background-color: var(--bg-color);
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }


    h3 {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    q {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0.5rem;

        &::before {
            content: "";
        }

        &::after {
            content: "";
        }
    }

    p {
        font-family: Poppins, sans-serif;
        font-size: 1.2rem;
        max-width: 70%;
    }
`;