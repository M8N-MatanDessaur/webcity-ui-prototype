import styled from 'styled-components';

const breakpoints = {
  large: '1200px',
  xlarge: '1440px',
  xxlarge: '1800px',
};

const maxWidths = {
  default: '800px',
  large: '960px',
  xlarge: '80%',
  xxlarge: '1440px',
};

const responsiveMaxWidth = `
  max-width: ${maxWidths.default};

  @media (min-width: ${breakpoints.large}) {
    max-width: ${maxWidths.large};
  }

  @media (min-width: ${breakpoints.xlarge}) {
    max-width: ${maxWidths.xlarge};
  }

  @media (min-width: ${breakpoints.xxlarge}) {
    max-width: ${maxWidths.xxlarge};
  }
`;

export const Article = styled.article`
  ${responsiveMaxWidth}
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 10px;
`;

export const TitleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
  h1 {
    width: 100%;
  }
`;

export const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-color);
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Category = styled.span`
  background-color: #c07ffd;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
`;

export const Content = styled.div`
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }

  h2, h3, h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  blockquote {
    background-color: #f9f9f9;
    padding: 1rem;
    margin: 1rem 0;
    border-left: 5px solid #c07ffd;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const BlogHeadline = styled.h1`
  ${responsiveMaxWidth}
  background: white;
  padding: 2rem;
  position: absolute;
  bottom: -36px;
  color: var(--text-color);
  font-size: 2.5rem;

  border-radius: 10px;

  @media (max-width: 860px) {
    border-radius: 0;
    font-size: 2rem;
}

  @media (max-width: 768px) {
    font-size: 1.5rem;
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: bold;
    font-size: 1rem;
  }

  span:last-child {
    font-size: 0.8rem;
    color: #666;
  }
`;

export const ShareButton = styled.button`
 font-family: Poppins, sans-serif;
    background-color: var(--background-color);
    border: none;
    padding: 15px;
    position: absolute;
  top: 1rem;
  right: 1rem;
    z-index: 998;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    border: 1px solid var(--text-color);
      svg {
        width: 1.3rem;
        height: 1.3rem;
        transform: ${props => (props.isClicked ? "scaleY(-1)" : "none")};
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
    background-color: black;
        & svg {
          fill: white;
        }
    }

    &:active {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        padding: 9px;
    }
`;