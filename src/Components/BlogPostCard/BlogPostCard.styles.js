import styled from 'styled-components';

export const BlogPost = styled.article`
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  background-color: #fff;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const BlogImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BlogContent = styled.div`
  padding: 1rem;
`;

export const BlogTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  
  a {
    color: var(--text-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const CategorySpan = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #b586f7;
  color: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

export const DateSpan = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

export const BlogExcerpt = styled.p`
  font-size: 0.9rem;
  color: #444;
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const AuthorName = styled.span`
  font-size: 0.9rem;
  color: var(--text-color);
`;