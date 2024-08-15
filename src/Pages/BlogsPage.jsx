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

    return (
        <WallpaperWrapper>
            <Helmet>
                <meta name="description" content="webcity.dev blogs" />
                <title>webcity.dev - Blogs</title>
                <meta property="og:title" content="webcity.dev | Blogs" />
                <meta property="og:description" content="webcity.dev blogs" />
                <meta property="og:url" content="https://www.webcity.dev/blogs" />
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
    padding: 2rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    background-color: #fff;

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        width: 100%;
        font-weight: 200;
        margin: 0;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const BlogContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainSection = styled.div`
  flex: 3;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const LoadMoreButton = styled(PrimaryButton)`
  margin: 2rem auto;
  display: block;
`;

export default BlogsPage;
