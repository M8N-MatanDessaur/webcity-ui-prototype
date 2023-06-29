import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer";
import LinkContainer from "../../Components/LinkContainer";
import { Link } from "react-router-dom";
import PageIndicator from "../../Components/PageIndicator";

const links = [
    {
        title: "ChatGPT",
        description: "Answers to all your questions",
        link: "https://chat.openai.com/"
    },
    {
        title: "WriteSonic",
        description: "Answers to all your questions and more",
        link: "https://writesonic.com/"
    },
    {
        title: "Copy.ai",
        description: "Writes for you",
        link: "https://www.copy.ai/"
    },
    {
        title: "Rytr",
        description: "Writes for you",
        link: "https://rytr.me/"
    },
    {
        title: "Dall-E",
        description: "Text to image generator",
        link: "https://creator.nightcafe.studio/"
    },
    {
        title: "CrAIyon",
        description: "Text to image generator",
        link: "https://www.craiyon.com/"
    }
];



export default function AiTools() {
    return (
        <Container>
            <TiltContainer>
                {
                    links.map((link, index) => {
                        return (
                            <LinkContainer key={index} title={link.title} description={link.description} link={link.link} />
                        );
                    })
                }
            </TiltContainer>
            <ToolsListButton />
            <PageIndicator pageName="AI Tools" />
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


