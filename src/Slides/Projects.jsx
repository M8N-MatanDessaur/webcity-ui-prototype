import React, { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import img1 from "../Assets/Images/media/1.jpg";
import img2 from "../Assets/Images/media/2.jpg";
import img3 from "../Assets/Images/media/3.jpg";
import img4 from "../Assets/Images/media/4.jpg";
import img5 from "../Assets/Images/media/5.jpg";
import img1fr from "../Assets/Images/media/1fr.jpg";
import img2fr from "../Assets/Images/media/2fr.jpg";
import img3fr from "../Assets/Images/media/3fr.jpg";
import img4fr from "../Assets/Images/media/4fr.jpg";
import img5fr from "../Assets/Images/media/5fr.jpg";
import ScrollArrow from "../Components/ScrollArrow";
import ScheduleButton from "../Components/ScheduleButton";
import Blob from "../Components/Blob";

export default function Projects() {
    const { t, i18n } = useTranslation();
    const isFrench = i18n.language === 'fr';
    const images = isFrench ? [img1fr, img2fr, img3fr, img4fr, img5fr] : [img1, img2, img3, img4, img5];
    const imgRefs = useRef([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const initializeObserver = () => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    } else {
                        entry.target.classList.remove('fade-in');
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px 100px 0px" }
        );

        imgRefs.current.forEach((img) => {
            if (img) {
                observer.observe(img);
            }
        });

        return observer;
    };

    useEffect(() => {
        let observer = initializeObserver();

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const observer = initializeObserver();

        return () => {
            observer.disconnect();
        };
    }, [windowWidth]);

    return (
        <div id="portfolio" style={{
            padding: "3rem",
            maxWidth: "1400px",
            margin: "0 auto",
            position: "relative",
        }}>
            <Title>{t('mainText.portfolio')}</Title>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2 }}
                key={windowWidth} // Force re-render on window width change
            >
                <Masonry>
                    {images.map((img, index) => (
                        <FadeImage
                            key={index}
                            ref={(el) => (imgRefs.current[index] = el)}
                            src={img}
                            alt={`img${index + 1}`}
                            loading='lazy'
                            placeholder="blurred"
                        />
                    ))}
                    <YourProject>
                        <h4>{t('mainText.yourProjectSub')}</h4>
                        <h3>{t('mainText.yourProject')}</h3>
                        <p>{t('mainText.yourProjectText')}</p>
                        <div>
                        <ScheduleButton isOn={true} />
                        </div>
                        <BlurerdContainer>
                            <Blob height="300" width="300" />
                        </BlurerdContainer>
                    </YourProject>
                </Masonry>
            </ResponsiveMasonry>
            <ScrollArrow bottom={"-36px"} />
        </div>
    );
}

const BlurerdContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    z-index: -1;
    filter: blur(50px);
`;

const Title = styled.h2`
    color: var(--text-color);
    text-align: center;
    margin-bottom: 2rem;
    font-family: Poppins, sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2;
      padding: 1rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
`;

const FadeImage = styled.img`
    width: 100%;
    display: block;
    padding: 0.5rem;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.fade-in {
        opacity: 1;
    }
`;

const YourProject = styled.div`
    position: relative;
    height: 100%;
    min-height: 500px;
    width: 100%;
    background-color: var(--bg-color);
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    h4 {
        font-family: Poppins, sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
}

    p {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        max-width: 70%;
    }
`;