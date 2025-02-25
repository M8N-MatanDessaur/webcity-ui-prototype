import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

// Import Prism core and theme
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

// Base language (required for others)
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';

// Languages
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';

import {
  Article,
  Categories,
  Category,
  Content,
  BlogInfo,
  BlogHeadline,
  AuthorSectionContainer,
  AuthorSection,
  AuthorImage,
  AuthorInfo,
  ShareButton,
  BlogPostImage,
  ShareSection,
  ShareText,
  ShareButtonStyled
} from './BlogPost.styles';
import {
  BlocksContainer,
  BlurredOverlay,
  ErrorContainer,
  FluidContainer,
  Heading,
  Headline,
  Paragraph,
  SubHeading,
  WallpaperWrapper
} from '../_Common/common.styles';
import Blob from '../Blob/Blob';
import { usePost } from '../../Hooks/UsePost';
import BackButton from '../BackButton/BackButton';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import CTABlock from '../../Blocks/CTABlock';
import { postsService } from '../../Services/posts'; // Assuming you have this service
import RecentPostsSidebar from '../RecentPostsSidebar/RecentPostsSidebar';
import { useRecentPosts } from '../../Hooks/useRecentPosts';
import CodeBlock from './CodeBlock';

const BlogPost = () => {
  const { slug } = useParams(); // Get the current slug from the URL parameters
  const navigate = useNavigate(); // Used to programmatically navigate to other routes
  const { t, i18n } = useTranslation(); // i18n hook for translations
  const currentLang = i18n.language; // Get the current language
  const { recentPosts, loading: recentPostsLoading, error: recentPostsError } = useRecentPosts(currentLang);

  // Fetch the post data based on the current language
  const { post, loading, error } = usePost(slug, currentLang); // Custom hook to fetch the post
  const [finalPost, setFinalPost] = useState(null); // State to hold the post to display

  useEffect(() => {
    const handlePostFallback = async () => {
      // Only attempt to fetch the alternate post if the current post is not found
      if (!post && !loading && !error) {
        try {
          // Fallback to the alternate language (fr if currentLang is en, and vice versa)
          const altLang = currentLang === 'en' ? 'fr' : 'en';
          const altPost = await postsService.getPostBySlug(slug, altLang);

          if (altPost) {
            // Fetch the unlocalized post by ID to check for the correct language version
            const unLocalizedPost = await postsService.getPostById(altPost[0]._id);

            if (unLocalizedPost?.slug?.[currentLang]) {
              const correctSlug = unLocalizedPost.slug[currentLang];
              navigate(`/blog/${correctSlug}`, { replace: true }); // Redirect to the correct URL
            } else {
              setFinalPost(altPost); // If no redirect needed, use the alternate language post
            }
          } else {
            setFinalPost(null); // If no post is found in either language
          }
        } catch (err) {
          console.error('Error fetching post by ID:', err);
        }
      } else {
        setFinalPost(post); // If the post is found, use it
      }
    };

    // Only run the fallback logic if post is not found
    if (!post) {
      handlePostFallback();
    } else {
      setFinalPost(post); // If post exists, set it as finalPost directly
    }
  }, [post, loading, error, currentLang, slug, navigate]); // Dependencies for useEffect

  // Format the date according to the current language
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(currentLang, options);
  };

  if (loading) {
    return <FluidContainer><Heading>{t('loading')}</Heading></FluidContainer>; // Show loading indicator while fetching data
  }

  if (error || !finalPost) {
    return (
      <ErrorContainer>
        <Headline>{t('errorLoadingContent')}</Headline>
        <SubHeading>{t('postNotFound')}</SubHeading>
        <RecentPostsSidebar recentPosts={recentPosts} formatDate={formatDate} />
        <Blob />
        <BlurredOverlay />
        <BackButton link={"blogs"} />
      </ErrorContainer>
    ); // Show error message if post is not found
  }

  // Extract and safely access all necessary fields from the post object
  const title = finalPost.title;
  const slugValue = finalPost.slug;
  const publishedAt = finalPost.publishedAt;
  const categories = finalPost.categories;
  const mainImageUrl = finalPost.mainImage?.asset?.url;
  const authorName = finalPost.author?.name
  const authorImage = finalPost.author?.image?.asset?.url;
  const bodyContent = finalPost.body;

  // Custom components for PortableText to handle any custom marks or blocks
  const portableTextComponents = {
    marks: {
      customButton: (props) => {
        if (props.text === '[cntctBtn]') {
          return <CTABlock />; // Render a custom call-to-action block when [cntctBtn] is found in the text
        }
        return <span>{props.children}</span>;
      },
    },
    block: {
      normal: ({ children }) => {
        return children.map(child =>
          typeof child === 'string' && child.includes('[cntctBtn]')
            ? <>{child.split('[cntctBtn]').map((part, index) => index === 0 ? <>{part}</> : <><CTABlock />{part}</>)}</>
            : child
        );
      },
    },
    types: {
      code: ({ value }) => {
        if (!value?.code) return null;
        const language = value.language || 'text';
        return <CodeBlock code={value.code} language={language} />;
      },
    },
  };

  return (
    <WallpaperWrapper>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={mainImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://www.webcity.dev/blog/${slugValue}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="webcity.dev" />

        {/* Twitter Card tags for social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webcitydev" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta name="twitter:image" content={mainImageUrl} />

        {/* Keywords and canonical URL */}
        <meta name="keywords" content={`${categories?.map(cat => cat.title).join(', ')}, web development, programming, blogs, tech news, web agency, business`} />
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
            "dateModified": finalPost._updatedAt,
            "description": finalPost.metaDescription,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.webcity.dev/blog/${slugValue}`
            },
            "keywords": categories?.map(cat => cat.title).join(', '),
          })}
        </script>
      </Helmet>
      <BlocksContainer>
        <Article>
          <BlogPostImage src={mainImageUrl} alt={title} />
          <BlogInfo>
          <AuthorSectionContainer>
            <BlogHeadline>{title}</BlogHeadline>
              <AuthorSection>
                {authorImage && <AuthorImage src={authorImage} alt={authorName} />}
                <AuthorInfo>
                  <span>{authorName}</span>
                  <span>{formatDate(publishedAt)}</span>
                </AuthorInfo>
              </AuthorSection>
              </AuthorSectionContainer>
              <Categories>
                {categories?.map(category => (
                  <Category key={category._id}>{category.title}</Category>
                ))}
              </Categories>
          </BlogInfo>
          <Content>
            <PortableText value={bodyContent} components={portableTextComponents} />
          </Content>
          <ShareSection>
            <ShareText>{t('blog.share.text', 'Like what you\'ve read? Share with a special someone! ✨')}</ShareText>
            <ShareButtonStyled onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post?.title || t('blog.share.defaultTitle', 'Interesting blog post'),
                  text: post?.description || t('blog.share.defaultDescription', 'Check out this interesting blog post!'),
                  url: window.location.href
                }).catch(err => console.log('Error sharing:', err));
              } else {
                // Fallback to copy to clipboard
                navigator.clipboard.writeText(window.location.href)
                  .then(() => alert(t('blog.share.copySuccess', 'Link copied to clipboard!')))
                  .catch(err => console.log('Error copying to clipboard:', err));
              }
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 5.24917 15.0227 5.37061L8.08261 9.19071C7.54305 8.46669 6.78899 8 5.93426 8C4.31055 8 3 9.34315 3 11C3 12.6569 4.31055 14 5.93426 14C6.78899 14 7.54305 13.5333 8.08261 12.8093L15.0227 16.6294C15.0077 16.7508 15 16.8745 15 17C15 18.6569 16.3431 20 18 20C19.6569 20 21 18.6569 21 17C21 15.3431 19.6569 14 18 14C17.1453 14 16.3912 14.4667 15.8517 15.1907L8.91165 11.3706C8.92664 11.2492 8.93426 11.1255 8.93426 11C8.93426 10.8745 8.92664 10.7508 8.91165 10.6294L15.8517 6.80929C16.3912 7.53331 17.1453 8 18 8Z" fill="currentColor"/>
              </svg>
              {t('blog.share.button', 'Share')}
            </ShareButtonStyled>
          </ShareSection>
        </Article>

        {/* Back Button */}
        <BackButton link={"blogs"} />
      </BlocksContainer>
    </WallpaperWrapper>
  );
};

export default BlogPost;
