import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer";
import LinkContainer from "../../Components/LinkContainer";
import { Link } from "react-router-dom";
import PageIndicator from "../../Components/PageIndicator";


const links = [
    {
        title: "Bezier game",
        description: "Pen tool mastering game",
        link: "https://bezier.method.ac/"
    },
    {
        title: "The boolean game",
        description: "Blending modes game",
        link: "https://boolean.method.ac/"
    },
    {
        title: "ColorMethod",
        description: "Color mastering game",
        link: "https://color.method.ac/"
    },
    {
        title: "Kolor",
        description: "Color matching mastering game",
        link: "https://kolor.moro.es/"
    },
    {
        title: "What the hex",
        description: "Color guessing mastering game",
        link: "https://yizzle.com/whatthehex/"
    },
    {
        title: "TypeMethod",
        description: "Typeface mastering game",
        link: "https://type.method.ac/"
    },
    {
        title: "ShapeMethod",
        description: "Letter shaping mastering game",
        link: "https://shape.method.ac/"
    },
    {
        title: "BetterWebType",
        description: "Typography mastering game",
        link: "https://betterwebtype.com/triangle/"
    },
    {
        title: "Pixactly",
        description: "Pixel precision mastering game",
        link: "https://pixact.ly/"
    },
    {
        title: "Designers-eye",
        description: "Alignement mastering game",
        link: "https://www.supremo.co.uk/designers-eye/"
    },
    {
        title: "CantUnsee",
        description: "UI design mastering game",
        link: "https://cantunsee.space/"
    },
    {
        title: "SQL Murder Game",
        description: "SQL mastering game",
        link: "https://mystery.knightlab.com/"
    },
    {
        title: "Elevator Saga",
        description: "Programming logic mastering game",
        link: "https://play.elevatorsaga.com/"
    },
    {
        title: "Untrusted",
        description: "Programming logic mastering game",
        link: "https://alexnisnevich.github.io/untrusted/"
    },
    {
        title: "Codewars",
        description: "Programming learning exercices",
        link: "https://www.codewars.com/"
    },
    {
        title: "CSSBattle",
        description: "CSS challenges",
        link: "https://cssbattle.dev/"
    },
    {
        title: "CSS Speedrun",
        description: "CSS speedrun test",
        link: "https://css-speedrun.netlify.app/"
    },
    {
        title: "Codingame",
        description: "Programming mastering game",
        link: "https://www.codingame.com/start"
    },
    {
        title: "FlexBox Froggy",
        description: "Flexbox mastering game",
        link: "https://flexboxfroggy.com/"
    },
    {
        title: "FlexBox Defence",
        description: "Flexbox mastering game",
        link: "http://www.flexboxdefense.com/"
    },
    {
        title: "CSS Garden",
        description: "Grid mastering game",
        link: "https://cssgridgarden.com/"
    },
    {
        title: "CSS Dinner",
        description: "CSS Selectors mastering game",
        link: "https://flukeout.github.io/"
    },
    {
        title: "Ztype",
        description: "Typing practice game",
        link: "https://zty.pe/"
    },
    {
        title: "SuperMarkupWorld",
        description: "game to learn HTML",
        link: "https://supermarkupworld.com/"
    }
];


export default function GamesTools() {
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
            <PageIndicator pageName="Games" />
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

const Title = styled.h1`
    color: var(--text-color);
    `;


