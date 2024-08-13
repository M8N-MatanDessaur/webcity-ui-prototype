import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Sidebar, SidebarHeading, RecentPostsList, RecentPost, RecentPostTitle, RecentPostDate } from './RecentPostsSidebar.styles';

const RecentPostsSidebar = ({ recentPosts, formatDate }) => {
  const { t } = useTranslation();

  return (
    <Sidebar>
      <SidebarHeading>{t('blogs.recentPosts')}</SidebarHeading>
      <RecentPostsList>
        {recentPosts.slice(0, 3).map(post => (
          <RecentPost key={post._id}>
            <Link to={`/blog/${post.slug.current}`}>
              <RecentPostTitle>{post.title}</RecentPostTitle>
              <RecentPostDate>{formatDate(post.publishedAt)}</RecentPostDate>
            </Link>
          </RecentPost>
        ))}
      </RecentPostsList>
    </Sidebar>
  );
};

export default RecentPostsSidebar;