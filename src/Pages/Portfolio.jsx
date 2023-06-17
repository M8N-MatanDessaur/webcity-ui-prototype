import React from "react";
import styled from "styled-components";
import BackButton from "../Components/BackButton";

export default function Portfolio() {
    return (
        <Container>
            <h1>Portfolio</h1>
            <p>coming soon ...</p>
            <BackButton />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    height: 100%;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
