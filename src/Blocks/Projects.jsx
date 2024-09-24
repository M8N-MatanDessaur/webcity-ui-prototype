import React, { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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

import {FadeImage, Heading} from "../Components/_Common/common.styles";
import YourProjectCTA from "../Components/YourProjectCTA/YourProjectCTA";

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
            padding: "1rem",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "90%",
            position: "relative",
        }}>
            <Heading>{t('mainText.portfolio')}</Heading>
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
                  <YourProjectCTA alt={true} />
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}