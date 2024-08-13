import styled from 'styled-components';

export const Sidebar = styled.aside`
  flex: 1;
  height: max-content;
  position: sticky;
  top: 100px;
`;

export const SidebarHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const RecentPostsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const RecentPost = styled.li`
  margin-bottom: 1rem;
  
  a {
    text-decoration: none;
    color: var(--text-color);
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RecentPostTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const RecentPostDate = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

