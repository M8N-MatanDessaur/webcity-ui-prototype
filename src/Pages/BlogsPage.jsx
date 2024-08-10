import { useEffect } from "react";
import { FluidContainer, Headline } from "../Components/_Common/common.styles";
import JSConfetti from 'js-confetti'
import BackButton from "../Components/BackButton/BackButton";
import { t } from "i18next";

export default function BlogsPage() {
    useEffect(() => {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['⚡️', '💥', '✨', '💫', '❗'],
         })
    }, [])

    return (
        <FluidContainer>
            <Headline>{t('blogs.comingsoon')}</Headline>
            <BackButton />
        </FluidContainer>
    );
}