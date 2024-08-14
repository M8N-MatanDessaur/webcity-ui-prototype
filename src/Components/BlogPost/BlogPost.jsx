import React from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import {
  Article,
  Categories,
  Category,
  Content,
  ImageContainer,
  TitleOverlay,
  BlogHeadline,
  AuthorSection,
  AuthorImage,
  AuthorInfo,
  ShareButton
} from './BlogPost.styles';
import { BlocksContainer, FluidContainer, Heading, WallpaperWrapper } from '../_Common/common.styles';
import { usePost } from '../../Hooks/UsePost';
import BackButton from '../BackButton/BackButton';
import { Helmet } from 'react-helmet';

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
    <WallpaperWrapper>
      <Helmet>
        <meta name="description" content={post.metaDescription} />
        <title>{`webcity.dev - ${post.title}`}</title>

        {/* Open Graph tags */}
        <meta property="og:title" content={`webcity.dev | ${post.title}`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.mainImage?.asset?.url} />
        <meta property="og:url" content={`https://www.webcity.dev/blogs/${post.slug.current}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webcitydev" />
        <meta name="twitter:title" content={`webcity.dev | ${post.title}`} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.mainImage?.asset?.url} />

        {/* Keywords including categories */}
        <meta name="keywords" content={`${post.categories.map(cat => cat.title).join(', ')}, web development, programming, blogs, tech news, web agency, business`} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.webcity.dev/blogs/${post.slug.current}`} />

        {/* Google Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.mainImage?.asset?.url,
            "author": {
              "@type": "Person",
              "name": post.author.name
            },
            "publisher": {
              "@type": "Organization",
              "name": "webcity.dev",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.webcity.dev/logo192.png"
              }
            },
            "datePublished": post.publishedAt,
            "dateModified": post._updatedAt,
            "description": post.metaDescription,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.webcity.dev/blogs/${post.slug.current}`
            },
            "keywords": post.categories.map(cat => cat.title).join(', '),
            "articleSection": post.categories[0]?.title
          })}
        </script>
      </Helmet>
      <BlocksContainer>
        <ImageContainer imageUrl={post.mainImage?.asset?.url}>
          <ShareButton onClick={
            () => {
            window.navigator.share({
              title: post.title,
              text: post.metaDescription,
              url: `https://www.webcity.dev/blogs/${post.slug.current}`
            });
            }}>
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92Z"></path>
            </svg>
          </ShareButton>
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
    </WallpaperWrapper>
  );
};

export default BlogPost;