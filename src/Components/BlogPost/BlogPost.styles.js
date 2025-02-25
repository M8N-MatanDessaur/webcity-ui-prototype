import styled, { keyframes } from 'styled-components';
import { Button } from '../BackButton/BackButton.styles';

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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const Article = styled.article`
  ${responsiveMaxWidth}
  margin: 0 auto;
  padding: 4rem;
  background-color: white;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  line-height: 1.7;
  font-size: 1.1rem;
  animation: ${fadeIn} 500ms ease-in;

  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
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
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
  border-radius: 16px;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 1rem 0;
  border-top: 1px solid #edf2f7;
  border-bottom: 1px solid #edf2f7;
  font-size: 0.95rem;
  color: #64748b;
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

export const TableOfContents = styled.nav`
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding: 1rem;
  margin-bottom: 2rem;
  border-left: 2px solid var(--border-color);
  font-size: 0.9rem;
  font-family: "Outfit", sans-serif;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0.5rem 0;
    padding-left: 1rem;
    
    a {
      color: var(--text-color);
      text-decoration: none;
      transition: all 0.2s ease;
      
      &:hover {
        color: #FF1493;
      }
      
      &.active {
        color: #FF1493;
        font-weight: 500;
      }
    }
  }
`;

export const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.progress}%;
  height: 3px;
  background: linear-gradient(90deg, #FF1493, #FF69B4);
  z-index: 1000;
  transition: width 0.2s ease;
`;

export const ShareSection = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2.5rem 0;
  padding: 1.5rem;
  background-color: #f8fafc;
  border-radius: 12px;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
`;

export const ShareButton = styled(Button)`
  position: fixed;
  bottom: 105px;
  left: 35px;

  @media (max-width: 768px) {
    bottom: 70px;
    left: 25px;
    padding: 8px;
  }
`;