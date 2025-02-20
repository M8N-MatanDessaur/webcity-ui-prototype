import React from "react";
import { useTranslation } from "react-i18next";
import { AltHeading, Paragraph, Separator, SectionContainer, QuotedText } from "../Components/_Common/common.styles";
import MembersGrid from "../Components/MembersGrid/MembersGrid";

export default function AboutUs() {

    const { t } = useTranslation();

    return (
        <SectionContainer>
            <AltHeading>{t('aboutUs.title')}</AltHeading>
            <Paragraph>{t('aboutUs.subtitle')}</Paragraph>
            <br /><br />
            <QuotedText>{t('aboutUs.vision')}</QuotedText>
            <Paragraph>{t('aboutUs.visionText')}</Paragraph>
            <br />
            <Separator />
            <MembersGrid />
        </SectionContainer>
    );
}
