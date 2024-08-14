import React from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { 
  Article, 
  MetaData, 
  Categories, 
  Category, 
  Content, 
  ImageContainer, 
  TitleOverlay, 
  BlogHeadline,
  AuthorSection,
  AuthorImage,
  AuthorInfo
} from './BlogPost.styles';
import { BlocksContainer, FluidContainer, Heading } from '../_Common/common.styles';
import { usePost } from '../../Hooks/UsePost';
import BackButton from '../BackButton/BackButton';

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = usePost(slug);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <FluidContainer><Heading>Loading...</Heading></FluidContainer>;
  }

  if (error) {
    return <FluidContainer><Heading>Error loading post. Please try again later.</Heading></FluidContainer>;
  }

  if (!post) {
    return <FluidContainer><Heading>Post not found</Heading></FluidContainer>;
  }

  return (
    <BlocksContainer>
      <ImageContainer imageUrl={post.mainImage?.asset?.url}>
        <TitleOverlay>
          <BlogHeadline>{post.title}</BlogHeadline>
        </TitleOverlay>
      </ImageContainer>
      <Article>
        <AuthorSection>
          <AuthorImage src={post.author.image?.asset?.url} alt={post.author.name} />
          <AuthorInfo>
            <span>{post.author.name}</span>
            <span>{formatDate(post.publishedAt)}</span>
          </AuthorInfo>
        </AuthorSection>
        <Categories>
          {post.categories.map(category => (
            <Category key={category._id}>{category.title}</Category>
          ))}
        </Categories>
        <Content>
          <PortableText value={post.body} />
        </Content>
      </Article>
      <BackButton link={"blogs"} />
    </BlocksContainer>
  );
};

export default BlogPost;