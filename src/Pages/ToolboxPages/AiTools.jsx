import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton";

export default function AiTools() {
    return (
        <Container>
            <Title>Coming soon</Title>
            <ToolsListButton />
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

const Title = styled.h1`
    color: var(--text-color);
    `;