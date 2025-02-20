import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BlocksContainer, FluidContainer, Heading, PrimaryButton, WallpaperWrapper } from '../Components/_Common/common.styles';
import BackButton from '../Components/BackButton/BackButton';
import { useCategories } from '../Hooks/useCategories';
import { usePosts } from '../Hooks/usePosts';
import { useRecentPosts } from '../Hooks/useRecentPosts';
import CategoryFilter from '../Components/CategoryFilter/CategoryFilter';
import BlogPostCard from '../Components/BlogPostCard/BlogPostCard';
import RecentPostsSidebar from '../Components/RecentPostsSidebar/RecentPostsSidebar';
import { Helmet } from 'react-helmet';

const BlogsPage = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const { posts, loading: postsLoading, error: postsError } = usePosts(currentLang);
    const { categories, loading: categoriesLoading, error: categoriesError } = useCategories(currentLang);
    const { recentPosts, loading: recentPostsLoading, error: recentPostsError } = useRecentPosts(currentLang);

    const [visiblePosts, setVisiblePosts] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState(currentLang === 'en' ? 'All' : 'Tous'); // Default value based on language

    const loadMore = () => {
        setVisiblePosts(prevVisible => prevVisible + 6);
    };

    const filteredPosts = selectedCategory === (currentLang === 'en' ? 'All' : 'Tous')
        ? posts
        : posts.filter(post => post.categories.some(cat => cat.title === selectedCategory));

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(currentLang, options);
    };

    if (postsLoading || categoriesLoading || recentPostsLoading) {
        return <FluidContainer><Heading>{t('loading')}</Heading></FluidContainer>;
    }

    if (postsError || categoriesError || recentPostsError) {
        console.log('recentPostsError', recentPostsError);
        console.log('postsError', postsError);
        console.log('categoriesError', categoriesError);
        return <FluidContainer><Heading>{t('errorLoadingContent')}</Heading></FluidContainer>;
    }

    if (posts.length === 0) {
        return <FluidContainer><Heading>{t('blogs.noPosts')}</Heading></FluidContainer>;
    }

    const schemaOrgBlogPage = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "webcity.dev Blog",
        "description": "Expert insights on web design, development trends, and best practices",
        "url": "https://www.webcity.dev/blogs",
        "publisher": {
            "@type": "Organization",
            "name": "webcity.dev",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.webcity.dev/logo.png"
            }
        },
        "blogPost": posts.slice(0, visiblePosts).map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.publishedAt,
            "author": {
                "@type": "Person",
                "name": post.author?.name || "webcity.dev Team"
            },
            "url": `https://www.webcity.dev/blog/${post.slug}`
        }))
    };

    return (
        <WallpaperWrapper>
            <Helmet>
                <title>webcity.dev Blog | Insights on Web Design & Development</title>
                <meta name="description" content="Explore webcity.dev's blog for expert insights on web design, development trends, and best practices. Stay updated with our latest articles and tips." />
                <meta property="og:title" content="webcity.dev Blog | Web Design & Development Insights" />
                <meta property="og:description" content="Explore webcity.dev's blog for expert insights on web design, development trends, and best practices. Stay updated with our latest articles and tips." />
                <meta property="og:url" content="https://www.webcity.dev/blogs" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="webcity.dev Blog | Web Design & Development Insights" />
                <meta name="twitter:description" content="Expert insights on web design, development trends, and best practices. Discover our latest articles and tips for creating stunning websites." />
                <script type="application/ld+json">
                    {JSON.stringify(schemaOrgBlogPage)}
                </script>
            </Helmet>
            <BlocksContainer>
                <BlogContentWrapper>
                    <MainSection>
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        <BlogGrid>
                            {filteredPosts.slice(0, visiblePosts).map(post => (
                                <BlogPostCard key={post._id} post={post} formatDate={formatDate} />
                            ))}
                            {filteredPosts.length === 0 && (
                                <ComingSoonBlogCard>
                                    <Heading>{t('blogs.comingSoon')} . . .</Heading>
                                </ComingSoonBlogCard>
                            )}
                        </BlogGrid>
                        {visiblePosts < filteredPosts.length && (
                            <LoadMoreButton onClick={loadMore}>
                                {t('blogs.loadMore')}
                            </LoadMoreButton>
                        )}
                    </MainSection>
                    <RecentPostsSidebar recentPosts={recentPosts} formatDate={formatDate} />
                </BlogContentWrapper>
                <BackButton link={""} />
            </BlocksContainer>
        </WallpaperWrapper>
    );
};

const ComingSoonBlogCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  transition: all 0.3s ease;
  min-height: 420px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.1);
  }

  h2 {
    width: 100%;
    font-weight: 300;
    margin: 0;
    text-align: center;
    color: #2d3748;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 300px;
  }
`;

const BlogContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const MainSection = styled.div`
  flex: 3;
  animation: fadeIn 0.6s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const LoadMoreButton = styled(PrimaryButton)`
  margin: 3rem auto 2rem;
  display: block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

export default BlogsPage;
