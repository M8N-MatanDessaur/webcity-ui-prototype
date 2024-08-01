import React, { useEffect, useRef, useState } from "react";
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