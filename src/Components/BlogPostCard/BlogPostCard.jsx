import { BlogPost, BlogImageWrapper, BlogImage, BlogContent, BlogTitle, BlogMeta, CategorySpan, DateSpan, BlogExcerpt, AuthorSection, AuthorImage, AuthorName } from './BlogPostCard.styles';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post, formatDate }) => {
  return (
    <BlogPost>
      <BlogImageWrapper>
        <BlogImage src={post.mainImage?.asset?.url} alt={post.title} />
      </BlogImageWrapper>
      <BlogContent>
        <BlogTitle>
          <Link to={`/blog/${post.slug.current}`}>{post.title}</Link>
        </BlogTitle>
        <BlogMeta>
          <CategorySpan>{post.categories.map(cat => cat.title).join(', ')}</CategorySpan>
          <DateSpan>{formatDate(post.publishedAt)}</DateSpan>
        </BlogMeta>
        <BlogExcerpt>{post.excerpt}</BlogExcerpt>
        <AuthorSection>
          <AuthorImage src={post.author?.image?.asset?.url} alt={post.author?.name} />
          <AuthorName>{post.author?.name}</AuthorName>
        </AuthorSection>
      </BlogContent>
    </BlogPost>
  );
};

export default BlogPostCard;