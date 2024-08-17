import {CTAText, CTATitle } from "./CTA.styles";
import { useTranslation } from 'react-i18next';

const CTA = ({children}) => {
    const { t } = useTranslation();
    return (
      <>
        <CTATitle>{t('cta.title')}</CTATitle>
        <CTAText>{t('cta.text')}</CTAText>
        <center>
            {children}
        </center>
        
      </>
    );
  };
  
  export default CTA;