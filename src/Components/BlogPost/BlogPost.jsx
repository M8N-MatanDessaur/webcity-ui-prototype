import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { postsService } from '../../Services/posts'; // Assuming you have this service

const BlogPost = () => {
  const { slug } = useParams(); // Get the current slug from the URL parameters
  const navigate = useNavigate(); // Used to programmatically navigate to other routes
  const { t, i18n } = useTranslation(); // i18n hook for translations
  const currentLang = i18n.language; // Get the current language

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
    return <FluidContainer>
      <Heading>{t('errorLoadingContent')}</Heading>
      <BackButton link={"blogs"} />
    </FluidContainer>;
  }

  // Extract and safely access all necessary fields from the post object
  const title = finalPost.title;
  const slugValue = finalPost.slug;
  const publishedAt = finalPost.publishedAt;
  const categories = finalPost.categories;
  const mainImageUrl = finalPost.mainImage?.asset?.url;
  const authorName = finalPost.author?.name;
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
  };

  return (
    <WallpaperWrapper>
      <Helmet>
        <title>{`${title} - webcity.dev`}</title>
        <meta name="description" content={finalPost.metaDescription || t('defaultMetaDescription')} />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${title} - webcity.dev`} />
        <meta property="og:description" content={finalPost.metaDescription || t('defaultMetaDescription')} />
        <meta property="og:image" content={mainImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://www.webcity.dev/blog/${slugValue}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="webcity.dev" />

        {/* Twitter Card tags for social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@webcitydev" />
        <meta name="twitter:title" content={`${title} - webcity.dev`} />
        <meta name="twitter:description" content={finalPost.metaDescription || t('defaultMetaDescription')} />
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
        {/* Main Image and Title */}
        {mainImageUrl && (
          <ImageContainer imageUrl={mainImageUrl}>
            <ShareButton onClick={() => {
              window.navigator.share({
                title: title,
                text: finalPost.metaDescription,
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

        {/* Article Content */}
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

        {/* Back Button */}
        <BackButton link={"blogs"} />
      </BlocksContainer>
    </WallpaperWrapper>
  );
};

export default BlogPost;
