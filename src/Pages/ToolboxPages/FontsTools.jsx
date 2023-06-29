import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer";
import LinkContainer from "../../Components/LinkContainer";
import { Link } from "react-router-dom";
import PageIndicator from "../../Components/PageIndicator";

const links = [
    {
        title: "Google Fonts",
        description: "Free fonts made by google",
        link: "https://fonts.google.com/"
    },
    {
        title: "Collletttivo",
        description: "Creative fonts for free",
        link: "http://collletttivo.it/"
    },
    {
        title: "PangramPangram",
        description: "Modern fonts and typefaces all free",
        link: "https://pangrampangram.com/"
    },
    {
        title: "Cufon Fonts",
        description: "Other fonts",
        link: "https://www.cufonfonts.com/"
    },
    {
        title: "velvetyne",
        description: "Modern fonts collection",
        link: "https://velvetyne.fr/"
    },
    {
        title: "poussetafonte",
        description: "Font tools & libraries",
        link: "https://www.poussetafonte.com/toolbox"
    },
    {
        title: "graphemica",
        description: "Unicode reference chart",
        link: "https://graphemica.com/unicode/characters"
    },
    {
        title: "ASCII",
        description: "Another ASCII reference chart",
        link: "https://theasciicode.com.ar/"
    },
    {
        title: "glyphy",
        description: "Symbols copy-paste",
        link: "https://glyphy.io/cool-symbols"
    },
    {
        title: "Fontjoy",
        description: "Font pairing made easy",
        link: "https://fontjoy.com/"
    }
];


export default function FontsTools() {
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
            <PageIndicator pageName="Fonts Tools" />
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


