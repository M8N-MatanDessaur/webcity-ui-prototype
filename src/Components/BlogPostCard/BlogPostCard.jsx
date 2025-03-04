import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, BlogImageWrapper, BlogImage, BlogContent, BlogTitle, BlogMeta, CategorySpan, DateSpan, BlogExcerpt, AuthorSection, AuthorImage, AuthorName } from './BlogPostCard.styles';

const BlogPostCard = ({ post, formatDate }) => {
  console.log('post', post);
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <BlogPost>
        <BlogImageWrapper>
          <BlogImage src={post.mainImage?.asset?.url} alt={post.title} />
        </BlogImageWrapper>
        <BlogContent>
          <BlogTitle>
            {post.title}
          </BlogTitle>
          <CategorySpan>{post.categories.map(cat => cat.title).join(', ')}</CategorySpan>
          <BlogExcerpt>{post.excerpt}</BlogExcerpt>
          <BlogMeta>
            <AuthorSection>
              <AuthorImage src={post.author?.image?.asset?.url} alt={post.author?.name} />
              <AuthorName>{post.author?.name}</AuthorName>
            </AuthorSection>
            <DateSpan>{formatDate(post.publishedAt)}</DateSpan>
          </BlogMeta>
        </BlogContent>
      </BlogPost>
    </Link>
  );
};

export default BlogPostCard;
