import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer/TiltContainer";
import LinkContainer from "../../Components/LinkContainer/LinkContainer";
import PageIndicator from "../../Components/PageIndicator/PageIndicator";

const links = [
    {
        title: "Coolors",
        description: "Color pallet generator",
        link: "https://coolors.co/"
    },
    {
        title: "CoulorCode",
        description: "Color pallet generator",
        link: "https://www.toptal.com/designers/colourcode"
    },
    {
        title: "Looka",
        description: "AI logo generator",
        link: "https://looka.com/logo-maker/"
    },
    {
        title: "Haikei",
        description: "Unique background generator",
        link: "https://app.haikei.app/"
    },
    {
        title: "Meshgradient",
        description: "A simple gradient generator",
        link: "https://meshgradient.in/"
    },
    {
        title: "Trianglyfy",
        description: "Triangle mesh generator",
        link: "https://trianglify.io/"
    },
    {
        title: "Pocoloco",
        description: "Dynamic backgrounds generator",
        link: "https://pocoloco.io/"
    },
    {
        title: "Glassphormism",
        description: "Glassphormism generator",
        link: "https://hype4.academy/tools/glassmorphism-generator"
    },
    {
        title: "Neumorphism",
        description: "Neumorphism generator",
        link: "https://hype4.academy/tools/neumorphism-generator"
    },
    {
        title: "Claymorphism",
        description: "Claymorphism generator",
        link: "https://hype4.academy/tools/claymorphism-generator"
    },
    {
        title: "Tableizer",
        description: "HTML table generator",
        link: "https://tableizer.journalistopia.com/"
    },
    {
        title: "Chartcss",
        description: "Html chart generator",
        link: "http://chartscss.org/"
    },
    {
        title: "LoremipsumIO",
        description: "Lorem Ipsum generator",
        link: "https://loremipsum.io/"
    },
    {
        title: "Patterns",
        description: "Patterns generator",
        link: "https://doodad.dev/pattern-generator/"
    },
    {
        title: "cssbud Shadows",
        description: "Box shadows generator",
        link: "https://cssbud.com/css-generator/css-box-shadow-generator/"
    },
    {
        title: "Shadow palete",
        description: "Shadows palette generator",
        link: "https://www.joshwcomeau.com/shadow-palette/"
    },
    {
        title: "Drop shadow generator",
        description: "Drop shadow generator",
        link: "https://webcode.tools/generators/css/drop-shadow"
    },
    {
        title: "FancyBorderRadius",
        description: "Border radius generator",
        link: "https://9elements.github.io/fancy-border-radius/"
    },
    {
        title: "Shapedivider",
        description: "Divider generator",
        link: "https://www.shapedivider.app/"
    },
    {
        title: "grid.layoutit",
        description: "CSS grid generator",
        link: "https://grid.layoutit.com/"
    },
    {
        title: "Bootstrap Maker",
        description: "Bootstrap layout generator",
        link: "https://layoutit.com/build"
    },
    {
        title: "GetWaves",
        description: "Create SVG waves",
        link: "https://getwaves.io/?ref=producthunt"
    },
    {
        title: "BLOB maker",
        description: "Blob generator",
        link: "https://www.blobmaker.app/"
    }
];



export default function Generatorstools() {
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
            <PageIndicator pageName="Generators" />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    height: 100%;
    height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;