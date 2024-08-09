import React from "react";
import styled from "styled-components";
import ToolsListButton from "../../Components/ToolsListButton/ToolsListButton";
import TiltContainer from "../../Components/TiltContainer/TiltContainer";
import LinkContainer from "../../Components/LinkContainer/LinkContainer";
import PageIndicator from "../../Components/PageIndicator/PageIndicator";

const links = [
    {
        title: "ChatGPT",
        description: "AI assistant",
        link: "https://chat.openai.com/"
    },
    {
        title: "WriteSonic",
        description: "ChatGPT alternative",
        link: "https://writesonic.com/"
    },
    {
        title: "Poe",
        description: "Customizable AI assistant",
        link:"https://poe.com/"
    },
    {
        title:"AgentGPT",
        description:"Automated assistant",
        link:"https://agentgpt.reworkd.ai/"
    },
    {
        title: "Copy.ai",
        description: "Your AI copywriter",
        link: "https://www.copy.ai/"
    },
    {
        title: "Rytr",
        description: "Ai writing assistant",
        link: "https://rytr.me/"
    },
    {
        title: "Dall-E",
        description: "Text to image generator",
        link: "https://creator.nightcafe.studio/"
    },
    {
        title: "CrAIyon",
        description: "Dall-E lite",
        link: "https://www.craiyon.com/"
    },
    {
        title: "DeepL",
        description: "Ai Translator",
        link: "https://www.deepl.com/translator"
    },
    {
        title:"blackbox",
        description:"AI for programmers",
        link:"https://www.useblackbox.io/"
    },
    {
        title:"Grammarly",
        description:"AI writing assistant",
        link:"https://www.grammarly.com/"
    },
    {
        title:"RunawayMl",
        description:"AI video & image tools",
        link:"https://www.runawayml.com/"
    },
    {
        title:"AdCreative",
        description:"AI ad copy generator",
        link:"https://adcreative.ai/"
    },
    {
        title:"CopySmith",
        description:"AI copywriter",
        link:"https://www.copysmith.ai/"
    },
    {
        title:"Watermark Remover",
        description:"AI watermark remover",
        link:"https://www.watermarkremover.io/"
    },
    {
        title:"Cody",
        description:"AI code generator",
        link:"https://meetcody.ai/"
    },
    {
        title:"Framer",
        description:"AI website builder",
        link:"https://www.framer.com/"
    },
    {
        title:"Mixo",
        description:"AI website builder",
        link:"https://www.mixo.io/"
    },
    {
        title:"PDF GPT",
        description:"AI PDF helper",
        link:"https://www.pdfgpt.io/"
    },
    {
        title:"ChatPDF",
        description:"AI PDF helper",
        link:"https://www.chatpdf.com/"
    },
    {
        title:"ProMind",
        description:"AI content generator",
        link:"https://promind.ai/minds/"
    },
    {
        title:"BuildT",
        description:"AI developer helper",
        link:"https://www.buildt.ai/"
    },
    {
        title:"HuggingFace",
        description:"AI playground",
        link:"https://huggingface.co/"
    },
     {
            title: "Pieces",
            description: "AI code snippet manager",
            link: "https://pieces.app/"
        },
        {
            title: "Thunderbit",
            description: "AI data analysis",
            link: "https://thunderbit.com/"
        },
        {
            title: "Claude",
            description: "AI assistant by Anthropic",
            link: "https://claude.ai/"
        },
        {
            title: "Tome",
            description: "AI storytelling tool",
            link: "https://tome.app/"
        },
        {
            title: "Globe Explorer",
            description: "AI research assistant",
            link: "https://explorer.globe.engineer/"
        },
        {
            title: "ChatPDF",
            description: "AI tool for PDFs",
            link: "https://www.chatpdf.com/"
        },
        {
        title:"There's an ai for that",
        description:"AI Tools & News",
        link:"https://theresanaiforthat.com/"
    },
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
    height: 100svh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
