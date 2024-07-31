import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import img1 from "../Assets/Images/media/1.jpg";
import img2 from "../Assets/Images/media/2.jpg";
import img3 from "../Assets/Images/media/3.jpg";
import img4 from "../Assets/Images/media/4.jpg";
import ScrollArrow from "../Components/ScrollArrow";

export default function Projects() {
    const { t } = useTranslation();
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
                    <img
                        src={img1}
                        alt={"img1"}
                        style={{ width: "100%", display: "block", padding: "0.5rem"}}
                        loading='lazy'
                    />
                    <img
                        src={img2}
                        alt={"img2"}
                        style={{ width: "100%", display: "block", padding: "0.5rem"}}
                        loading='lazy'
                    />
                    <img
                        src={img3}
                        alt={"img3"}
                        style={{ width: "100%", display: "block", padding: "0.5rem"}}
                        loading='lazy'
                    />
                    <img
                        src={img4}
                        alt={"img4"}
                        style={{ width: "100%", display: "block", padding: "0.5rem"}}
                        loading='lazy'
                    />
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