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
  padding: 2rem 4rem;
  background-color: white;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const BlogInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: flex-start;
  margin-bottom: 2rem;
  margin-top: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1rem;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Category = styled.span`
  background-color: #FF1493;
  font-weight: 600;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
`;

export const Content = styled.div`
  line-height: 1.6;
  max-width: 960px;
  margin: 0 auto;

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
  color: var(--text-color);
  font-size: 2.3rem;
  border-radius: 10px;

  @media (max-width: 860px) {
    border-radius: 0;
    font-size: 2rem;
}

  @media (max-width: 768px) {
    font-size: 1.5rem;
`;

export const BlogPostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const AuthorSectionContainer = styled.div`
width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  background-color: #ffffff94;
  backdrop-filter: blur(10px);
  border: none;
  padding: 1rem ;;
  position: fixed;
  top: 35px;
  right: 35px;
  z-index: 998;
  border-radius: 50px;
  border: 1px solid var(--text-color);
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text-color);
    text-decoration: none;
  }
  span {
   font-size: 1.6rem;
  color: var(--text-color);
  }
  &:hover {
      background-color: black;
    & svg {
      fill: white;
    }
    & span {
      color: white;
    }
      color: white;
  }
  &:active {
    opacity: 0.8
  }

   @media (max-width: 768px) {
   top: 25px;
    right: 25px;
    font-size: 1rem;
    & span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 380px) {
    font-size: 0.8rem;
    padding: 0.8rem 2rem;
    & span {
      font-size: 1rem;
    }
  }
`;