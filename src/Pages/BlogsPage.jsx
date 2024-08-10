import { useEffect } from "react";
import { FluidContainer, Headline } from "../Components/_Common/common.styles";
import JSConfetti from 'js-confetti'
import BackButton from "../Components/BackButton/BackButton";

export default function BlogsPage() {
    const jsConfetti = new JSConfetti()

    useEffect(() => {
        jsConfetti.addConfetti({
            emojis: ['⚡️', '💥', '✨', '💫', '❗'],
         })
    }, [])

    return (
        <FluidContainer>
            <Headline>Blogs are coming soon !!!</Headline>
            <BackButton />
        </FluidContainer>
    );
}