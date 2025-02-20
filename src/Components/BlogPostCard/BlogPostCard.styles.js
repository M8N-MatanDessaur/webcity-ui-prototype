import styled from 'styled-components';

export const BlogPost = styled.article`
  position: relative;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: #fff;
  min-height: 420px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const BlogImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  }
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const BlogTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  
  a {
    color: var(--text-color);
    text-decoration: none;
    background: linear-gradient(to right, currentColor 0%, currentColor 100%);
    background-size: 0px 1px;
    background-repeat: no-repeat;
    background-position: 0 100%;
    transition: background-size 0.3s ease-in-out;
    
    &:hover {
      text-decoration: none;
      background-size: 100% 1px;
    }
  }
`;

export const BlogMeta = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  width: 100%;
  color: #666;
  padding: 1rem 2rem;
`;

export const CategorySpan = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: rgba(255, 20, 147, 0.9);
  backdrop-filter: blur(4px);
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DateSpan = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

export const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 0.5rem 0 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: center;
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