import {CTAText, CTATitle, BlurerdBackground } from "./CTA.styles";
import { useTranslation } from 'react-i18next';

const CTA = ({children}) => {
    const { t } = useTranslation();
    return (
      <BlurerdBackground>
        <CTATitle>{t('cta.title')}</CTATitle>
        <CTAText>{t('cta.text')}</CTAText>
        <center>
            {children}
        </center>
        
      </BlurerdBackground>
    );
  };
  
  export default CTA;