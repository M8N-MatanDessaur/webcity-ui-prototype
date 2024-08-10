import ScheduleButton from "../ScheduleButton/ScheduleButton";
import Blob from "../Blob/Blob";
import {YourProject, BlurerdContainer} from './YourProjectCTA.styles';
import { useTranslation } from "react-i18next";

export default function YourProjectCTA() {
    const { t } = useTranslation();
    return (
        <YourProject>
            <q>{t('mainText.yourProjectSub')}</q>
            <h3>{t('mainText.yourProject')}</h3>
            <p>{t('mainText.yourProjectText')}</p>
            <div>
                <ScheduleButton isOn={true} />
            </div>
            <BlurerdContainer>
                <Blob height="300" width="300" />
            </BlurerdContainer>
        </YourProject>
    )
}