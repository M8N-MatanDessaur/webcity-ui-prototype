import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import img1 from "../Assets/Images/media/1.jpg";
import img2 from "../Assets/Images/media/2.jpg";
import img3 from "../Assets/Images/media/3.jpg";
import img4 from "../Assets/Images/media/4.jpg";

import img1fr from "../Assets/Images/media/1fr.jpg";
import img2fr from "../Assets/Images/media/2fr.jpg";
import img3fr from "../Assets/Images/media/3fr.jpg";
import img4fr from "../Assets/Images/media/4fr.jpg";
import ScrollArrow from "../Components/ScrollArrow";

export default function Projects() {
    const { t, i18n } = useTranslation();
    
    const isFrench = i18n.language === 'fr';

    const images = isFrench ? [img1fr, img2fr, img3fr, img4fr] : [img1, img2, img3, img4];

    return (
        <div id="portfolio" style={{
            padding: "3rem",
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
        }}>
            <Title>{t('mainText.portfolio')}</Title>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                <Masonry>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`img${index + 1}`}
                            style={{ width: "100%", display: "block", padding: "0.5rem"}}
                            loading='lazy'
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <ScrollArrow bottom={"-36px"} />
        </div>
    );
}

const Title = styled.h1`
    color: var(--text-color);
    text-align: center;
    margin-bottom: 2rem;
    `;