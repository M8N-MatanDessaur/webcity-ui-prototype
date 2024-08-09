import {GridWrapper, MemberCard, MemberPicture, ExtraText, CardHeader, CardHeaderText, CardHeaderTitle, CardHeaderSubtitle, CardBody, CardBodyText, LinkAlt} from './MembersGrid.styles';
import { useTranslation } from "react-i18next";
import matan_picture from "../../Assets/Images/matan.png";
import eric_picture from "../../Assets/Images/eric.png";

export default function MembersGrid() {
    const { t } = useTranslation();
    return (
        <GridWrapper>
        <MemberCard>
            <a href="https://matandessaur.me" target="_blank" rel="noreferrer">
            <MemberPicture src={matan_picture} alt="Matan" onContextMenu={(event)=>event.preventDefault()}/>
            </a>
            <ExtraText>{t('aboutUs.matanExtraText')}</ExtraText>
            <CardHeader>
                <CardHeaderText>
                    <CardHeaderTitle>Matan Dessaur</CardHeaderTitle>
                    <CardHeaderSubtitle>{t('aboutUs.matanSubtitle')}</CardHeaderSubtitle>
                </CardHeaderText>
            </CardHeader>
            <CardBody>
                <CardBodyText>{t('aboutUs.matanText')}</CardBodyText>
                <LinkAlt to="/toolbox">{t('aboutUs.clickHere')}</LinkAlt>
            </CardBody>
        </MemberCard>
        <MemberCard>
        <ExtraText>{t('aboutUs.ericExtraText')}</ExtraText>
            <MemberPicture src={eric_picture} alt="Eric" onContextMenu={(event)=>event.preventDefault()}/>
            <CardHeader>
                <CardHeaderText>
                    <CardHeaderTitle>Eric Gendron</CardHeaderTitle>
                    <CardHeaderSubtitle>{t('aboutUs.ericSubtitle')}</CardHeaderSubtitle>
                </CardHeaderText>
            </CardHeader>
            <CardBody>
                <CardBodyText>{t('aboutUs.ericText')}</CardBodyText>
            </CardBody>
        </MemberCard>
    </GridWrapper>
    );
}