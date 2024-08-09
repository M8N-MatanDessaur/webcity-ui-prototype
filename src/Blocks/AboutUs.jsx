import React from "react";
import { useTranslation } from "react-i18next";
import { AltHeading, Paragraph, Separator, FluidContainer, Heading } from "../Components/_Common/common.styles";
import MembersGrid from "../Components/MembersGrid/MembersGrid";

export default function AboutUs() {

    const { t } = useTranslation();

    return (
        <FluidContainer>
            <AltHeading>{t('aboutUs.title')}</AltHeading>
            <Paragraph>{t('aboutUs.subtitle')}</Paragraph>
            <br /><br />
            <Heading>{t('aboutUs.vision')}</Heading>
            <Paragraph>{t('aboutUs.visionText')}</Paragraph>
            <br />
            <Separator />
            <MembersGrid />
        </FluidContainer>
    );
}
