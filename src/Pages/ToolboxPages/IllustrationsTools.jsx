import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer";
import LinkContainer from "../../Components/LinkContainer";
import PageIndicator from "../../Components/PageIndicator";

const links = [
    {
        title: "Blush",
        description: "Fun illustrations",
        link: "https://blush.design/"
    },
    {
        title: "Noun Project",
        description: "Minimalistic Icons",
        link: "https://thenounproject.com/"
    },
    {
        title: "Open Peeps",
        description: "Hand-drawn illustrations",
        link: "https://www.openpeeps.com/"
    },
    {
        title: "humaaans",
        description: "Illustrations of people",
        link: "https://www.humaaans.com/"
    },
    {
        title: "undraw",
        description: "Minimalistic illustrations",
        link: "https://undraw.co/illustrations"
    },
    {
        title: "Texturefabrik",
        description: "Textures and Fabrics",
        link: "https://texturefabrik.com/tag/texture-fabric/"
    },
    {
        title: "Unsplash",
        description: "Free HD stock images",
        link: "https://unsplash.com/"
    },
    {
        title: "Gradientmagic",
        description: "Gradients library",
        link: "https://www.gradientmagic.com/"
    },
    {
        title: "Superdesigner",
        description: "Pattern library",
        link: "https://superdesigner.co/tools/css-backgrounds"
    },
    {
        title: "Flaticon",
        description: "Useful icons library",
        link: "https://www.flaticon.com/"
    },
    {
        title: "Iconer",
        description: "Icons for the web",
        link: "https://iconer.app/"
    },
    {
        title: "Iconfinder",
        description: "Icons for the web",
        link: "https://www.iconfinder.com/"
    },
    {
        title: "Iconscout",
        description: "Icons for the web",
        link: "https://iconscout.com/"
    },
    {
        title:"Phosphor Icons",
        description:"Icons for the web",
        link:"https://phosphoricons.com/"
    },
    {
        title: "OpenCursors",
        description: "Cursors for the web",
        link: "http://www.rw-designer.com/cursor-library"
    },
    {
        title: "Bgjar",
        description: "Css svg backgrounds",
        link: "https://bgjar.com/"
    },
      {
            title: "unDraw",
            description: "Free open-source illustrations",
            link: "https://undraw.co/"
        },
        {
            title: "IRA Design",
            description: "Build custom illustrations",
            link: "https://iradesign.io"
        },
        {
            title: "The Doodle Library",
            description: "Hand-drawn illustrations",
            link: "https://www.thedoodlelibrary.com"
        },
        {
            title: "DrawKit",
            description: "Free high-quality illustrations",
            link: "https://www.drawkit.com/"
        },
        {
            title: "Dorik Illustrations",
            description: "Illustrations for websites",
            link: "https://dorik.com/illustrations"
        },
        {
            title: "Grabient",
            description: "Gradient color combinations",
            link: "https://www.grabient.com"
        },
        {
            title: "Mesh Gradients",
            description: "Beautiful mesh gradients",
            link: "https://products.ls.graphics/mesh-gradients"
        },
        {
            title: "Meshy",
            description: "Gradient mesh generator",
            link: "https://meshy.uxie.io"
        },
        {
            title: "Gradient Cards",
            description: "Interactive gradients",
            link: "https://gradients.ray.st"
        }
];



export default function Illustrationstools() {
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
            <PageIndicator pageName="Illustrations Tools" />
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
