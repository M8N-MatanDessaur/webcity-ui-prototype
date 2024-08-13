import styled from 'styled-components';

export const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
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
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
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

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const BlogHeadline = styled.h1`
    background: white;
    padding: 2rem;
    position: absolute;
    bottom: -36px;
    color: var(--text-color);
    max-width: 800px;
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