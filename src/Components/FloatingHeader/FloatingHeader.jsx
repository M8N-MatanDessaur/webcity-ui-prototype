import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../Hooks/useModal';
import {
    FloatingHeaderContainer,
    Logo,
    Nav,
    NavItem,
    NavCta
} from './FloatingHeader.styles';
import LogoImage from '../../Assets/Images/webcity-logo.svg';

export default function FloatingHeader() {
    const { t } = useTranslation();
    const { setIsModalOpen } = useModal();

    const handleCtaClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <FloatingHeaderContainer>
            <Logo src={LogoImage} alt="Logo" />
            <Nav>
                <NavItem href="/blogs">{t('header.blogs')}</NavItem>
                <NavCta href="#" onClick={handleCtaClick}>{t('header.cta')}</NavCta>
            </Nav>
        </FloatingHeaderContainer>
    );
}