import React from "react";
import ToolsListButton from "../../Components/ToolsListButton/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer/TiltContainer";
import LinkContainer from "../../Components/LinkContainer/LinkContainer";
import PageIndicator from "../../Components/PageIndicator/PageIndicator";
import { FullScreenContainer } from "../../Components/_Common/common.styles";
import BackButton from "../../Components/BackButton/BackButton";
import { Helmet } from "react-helmet";

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
        description: "Modern fonts and typefaces",
        link: "https://pangrampangram.com/"
    },
    {
        title: "Cufon Fonts",
        description: "Original fonts",
        link: "https://www.cufonfonts.com/"
    },
    {
        title: "velvetyne",
        description: "Abstract fonts collection",
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
    },
    {
            title: "Wordmark.it",
            description: "Preview fonts with text",
            link: "https://wordmark.it"
        },
        {
            title: "WhatTheFont",
            description: "Identify fonts from images",
            link: "https://www.myfonts.com/pages/whatthefont"
        },
        {
            title: "TypeScale",
            description: "Visual type scale calculator",
            link: "https://typescale.com/"
        },
        {
            title: "Flaticon",
            description: "Free vector icons",
            link: "https://www.flaticon.com/"
        },
        {
            title: "Nucleo App",
            description: "Icon manager for pros",
            link: "https://nucleoapp.com/app"
        },
        {
            title: "FontForge",
            description: "Open-source font editor",
            link: "https://fontforge.org/"
        },
        {
            title: "Modern Font Stacks",
            description: "Curated font stacks",
            link: "https://modernfontstacks.com"
        }
];


export default function FontsTools() {
    return (
        <FullScreenContainer>
            <Helmet>
                <meta name="description" content="webcity's fonts tools is a collection of tools and resources for web designers and developers. From font pairing to font libraries, we've got you covered." />
                <title>webcity - fonts tools</title>
                <meta property="og:title" content="webcity - fonts tools" />
                <meta property="og:description" content="webcity's fonts tools is a collection of tools and resources for web designers and developers. From font pairing to font libraries, we've got you covered." />
                <meta property="og:url" content="https://www.webcity.dev/toolbox/fontstools" />
            </Helmet>
            <TiltContainer>
                {
                    links.map((link, index) => {
                        return (
                            <LinkContainer key={index} title={link.title} description={link.description} link={link.link} />
                        );
                    })
                }
            </TiltContainer>
            <BackButton link="toolbox" />
            <PageIndicator pageName="Fonts Tools" />
        </FullScreenContainer>
    );
}
