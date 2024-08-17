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
import { useTranslation } from 'react-i18next';
import CTABlock from '../../Blocks/CTABlock';

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Fetch the post data based on the current language
  const { post, loading, error } = usePost(slug, currentLang);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(currentLang, options);
  };

  if (loading) {
    return <FluidContainer><Heading>{t('loading')}</Heading></FluidContainer>;
  }

  if (error) {
    console.error('Error fetching post:', error);
    return <FluidContainer><Heading>{t('errorLoadingContent')}</Heading></FluidContainer>;
  }

  if (!post) {
    console.warn('No post found for the given slug:', slug);
    return <FluidContainer><Heading>{t('postNotFound')}</Heading></FluidContainer>;
  }

  console.log('Post data:', post);

  // Extract and safely access all necessary fields
  const title = post.title;
  const slugValue = post.slug;
  const publishedAt = post.publishedAt;
  const categories = post.categories;
  const mainImageUrl = post.mainImage?.asset?.url;
  const authorName = post.author?.name;
  const authorImage = post.author?.image?.asset?.url;
  const bodyContent = post.body;

  // Custom components for PortableText
  const portableTextComponents = {
    marks: {
      customButton: (props) => {
        if (props.text === '[cntctBtn]') {
          return <CTABlock/>;
        }
        return <span>{props.children}</span>;
      },
    },
    block: {
      normal: ({ children }) => {
        return children.map(child => 
          typeof child === 'string' && child.includes('[cntctBtn]') 
          ? <>{child.split('[cntctBtn]').map((part, index) => index === 0 ? <>{part}</> : <><CTABlock />{part}</> )}</> 
          : child
        );
      },
    },
  };

  return (
    <WallpaperWrapper>
      <Helmet>
        <title>{`${title} - webcity.dev`}</title>
        <meta name="description" content={post.metaDescription || t('defaultMetaDescription')} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${title} - webcity.dev`} />
        <meta property="og:description" content={post.metaDescription || t('defaultMetaDescription')} />
        <meta property="og:image" content={mainImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://www.webcity.dev/blog/${slugValue}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="webcity.dev" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webcitydev" />
        <meta name="twitter:title" content={`${title} - webcity.dev`} />
        <meta name="twitter:description" content={post.metaDescription || t('defaultMetaDescription')} />
        <meta name="twitter:image" content={mainImageUrl} />

        {/* Keywords including categories */}
        <meta name="keywords" content={`${categories?.map(cat => cat.title).join(', ')}, web development, programming, blogs, tech news, web agency, business`} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.webcity.dev/blog/${slugValue}`} />

        {/* Google Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "image": mainImageUrl,
            "author": {
              "@type": "Person",
              "name": authorName
            },
            "publisher": {
              "@type": "Organization",
              "name": "webcity.dev",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.webcity.dev/logo192.png"
              }
            },
            "datePublished": publishedAt,
            "dateModified": post._updatedAt,
            "description": post.metaDescription,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.webcity.dev/blog/${slugValue}`
            },
            "keywords": categories?.map(cat => cat.title).join(', '),
          })}
        </script>
      </Helmet>
      <BlocksContainer>
        {mainImageUrl && (
          <ImageContainer imageUrl={mainImageUrl}>
            <ShareButton onClick={() => {
              window.navigator.share({
                title: title,
                text: post.metaDescription,
                url: `https://www.webcity.dev/blog/${slugValue}`
              });
            }}>
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92Z"></path>
              </svg>
            </ShareButton>
            <TitleOverlay>
              <BlogHeadline>{title}</BlogHeadline>
            </TitleOverlay>
          </ImageContainer>
        )}
        <Article>
          <AuthorSection>
            {authorImage && <AuthorImage src={authorImage} alt={authorName} />}
            <AuthorInfo>
              <span>{authorName}</span>
              <span>{formatDate(publishedAt)}</span>
            </AuthorInfo>
          </AuthorSection>
          <Categories>
            {categories?.map(category => (
              <Category key={category._id}>{category.title}</Category>
            ))}
          </Categories>
          <Content>
            <PortableText value={bodyContent} components={portableTextComponents} />
          </Content>
        </Article>
        <BackButton link={"blogs"} />
      </BlocksContainer>
    </WallpaperWrapper>
  );
};

export default BlogPost;
