import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer";
import LinkContainer from "../../Components/LinkContainer";
import { Link } from "react-router-dom";
import PageIndicator from "../../Components/PageIndicator";

const links = [
    {
        title: "TinyWow",
        description: "Free PDF, Video, Images & Other online tools",
        link: "https://tinywow.com/"
    },
    {
        title: "TinyPng",
        description: "Image compressor for the web",
        link: "https://tinypng.com/"
    },
    {
        title: "SMMRY",
        description: "Summarize everything",
        link: "https://smmry.com/"
    },
    {
        title: "Reverso",
        description: "Grammar corrector",
        link: "https://www.reverso.net/orthographe/correcteur-francais/"
    },
    {
        title: "Paraphraser",
        description: "Paraphraser tool",
        link: "https://www.paraphraser.io/fr/outil-de-paraphrase"
    },
    {
        title: "Figma",
        description: "UI/UX tool",
        link: "https://www.figma.com/"
    },
    {
        title: "Photopea",
        description: "Online photoshop alternative",
        link: "https://www.photopea.com/"
    },
    {
        title: "RemoveBG",
        description: "Remove Backgrounds online",
        link: "https://www.remove.bg/"
    },
    {
        title: "Spline",
        description: "3D objects for the web",
        link: "https://app.spline.design/"
    },
    {
        title: "Uiverse",
        description: "Free objects for the web",
        link: "https://uiverse.io/buttons"
    },
    {
        title: "Ceaser",
        description: "CSS animation tool",
        link: "https://matthewlein.com/tools/ceaser"
    },
    {
        title: "Animasta",
        description: "CSS animation tool",
        link: "https://animista.net/"
    },
    {
        title: "Keyframes",
        description: "keyframes animation tool for SVG",
        link: "https://keyframes.app/animate/"
    },
    {
        title: "Vivus",
        description: "Auto animation tool for SVG",
        link: "https://maxwellito.github.io/vivus-instant/"
    },
    {
        title: "Transitions",
        description: "Copy-Paste CSS transitions",
        link: "https://www.transition.style/"
    },
    {
        title: "Carbon",
        description: "Save your codes with style",
        link: "https://carbon.now.sh/"
    },
    {
        title: "PoetIO",
        description: "Save your posts with style",
        link: "https://poet.so/"
    },
    {
        title: "Design.facebook",
        description: "Devices mockups for your projects",
        link: "https://design.facebook.com/toolsandresources/"
    },
    {
        title: "Cheatography",
        description: "Free cheat Sheets",
        link: "https://cheatography.com/"
    },
    {
        title: "AOS",
        description: "Animate on scroll",
        link: "https://michalsnik.github.io/aos/"
    },
    {
        title: "Animate.Style",
        description: "css animations framework",
        link: "https://animate.style/"
    },
    {
        title: "FFFuel",
        description: "css graphics tool",
        link: "https://fffuel.co/"
    },
    {
        title: "Blobz",
        description: "css animated blobs",
        link: "https://toruskit.com/tools/blobz/"
    },
    {
        title: "Framer Motion",
        description: "react plugin for animations",
        link: "https://www.framer.com/motion/"
    },
    {
        title: "Hamburgers",
        description: "css hamburger-menus",
        link: "https://jonsuh.com/hamburgers/"
    },
    {
        title: "Keycodes Tool",
        description: "a tool to find keycodes",
        link: "https://www.toptal.com/developers/keycode"
    },
    {
        title: "10015-Tools",
        description: "Handy set of web tools",
        link: "https://10015.io/"
    }
];



export default function MoreTools() {
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
            <PageIndicator currentPage="More Tools" />
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


