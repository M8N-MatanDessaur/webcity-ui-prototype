import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer/TiltContainer";
import LinkContainer from "../../Components/LinkContainer/LinkContainer";
import PageIndicator from "../../Components/PageIndicator/PageIndicator";
import { t } from "i18next";


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
        description: "Color matching game",
        link: "https://kolor.moro.es/"
    },
    {
        title: "What the hex",
        description: "Color guessing game",
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
        description: "Pixel precision game",
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
        description: "SQL Murder Mistery",
        link: "https://mystery.knightlab.com/"
    },
    {
        title: "Elevator Saga",
        description: "Programming logic game",
        link: "https://play.elevatorsaga.com/"
    },
    {
        title: "Untrusted",
        description: "Programming escape the room",
        link: "https://alexnisnevich.github.io/untrusted/"
    },
    {
        title: "Codewars",
        description: "Code challenges",
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
        description: "CSS Flexbox game",
        link: "http://www.flexboxdefense.com/"
    },
    {
        title: "CSS Garden",
        description: "CSS Grid game",
        link: "https://cssgridgarden.com/"
    },
    {
        title: "CSS Dinner",
        description: "CSS Selectors mastering game",
        link: "https://flukeout.github.io/"
    },
    {
        title: "Ztype",
        description: "Typing practice shooter",
        link: "https://zty.pe/"
    },
    {
        title: "SuperMarkupWorld",
        description: "learn HTML the fun way",
        link: "https://supermarkupworld.com/"
    },
    {
        title: "designercize",
        description: "UI design Timed Challenges",
        link: "https://www.designercize.com/"
    },
    {
        title:"AI Dungeon",
        description:"AI text adventure",
        link:"https://play.aidungeon.io/"
    },
    {
        title:"JSRobot",
        description:"Javascript programming game",
        link:"https://lab.reaal.me/jsrobot/"
    },
    {
        title:"JSWarrior",
        description:"Javascript dungeon crawler",
        link:"https://warriorjs.com/"
    },
    {
        title:"yare.io",
        description:"Real-Time Strategy game",
        link:"https://yare.io/"
    },
    {
        title:"cyber-dojo",
        description:"Programming challenges",
        link:"https://cyber-dojo.org/creator/home"
    },
    {
        title:"Oh My Git",
        description:"Git learning game",
        link:"https://ohmygit.org/"
    },
     {
            title: "Human or Not",
            description: "Turing test game",
            link: "https://humanornot.so/"
        },
        {
            title: "Infinite Craft",
            description: "Endless building game",
            link: "https://neal.fun/infinite-craft/"
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
