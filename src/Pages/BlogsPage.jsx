import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { createGlobalStyle } from 'styled-components';
import { BlocksContainer, FluidContainer, Heading, PrimaryButton } from '../Components/_Common/common.styles';
import BackButton from '../Components/BackButton/BackButton';
import { useCategories } from '../Hooks/useCategories';
import { usePosts } from '../Hooks/usePosts';
import { useRecentPosts } from '../Hooks/useRecentPosts';
import CategoryFilter from '../Components/CategoryFilter/CategoryFilter';  // Import the new component
import BlogPostCard from '../Components/BlogPostCard/BlogPostCard';
import RecentPostsSidebar from '../Components/RecentPostsSidebar/RecentPostsSidebar';

const BlogsPage = () => {
    const { t } = useTranslation();
    const { posts, loading: postsLoading, error: postsError } = usePosts();
    const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
    const { recentPosts, loading: recentPostsLoading, error: recentPostsError } = useRecentPosts();
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const loadMore = () => {
        setVisiblePosts(prevVisible => prevVisible + 6);
    };

    const filteredPosts = selectedCategory === 'All'
        ? posts
        : posts.filter(post => post.categories.some(cat => cat.title === selectedCategory));

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (postsLoading || categoriesLoading || recentPostsLoading) {
        return <FluidContainer><Heading>Loading...</Heading></FluidContainer>;
    }

    if (postsError || categoriesError || recentPostsError) {
        return <FluidContainer><Heading>Error loading content. Please try again later.</Heading></FluidContainer>;
    }

    return (
        <PageWrapper>
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
                        <ComingSoonBlogCard>
                            <Heading>{t('blogs.comingSoon')} . . .</Heading>
                        </ComingSoonBlogCard>
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
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: 
        linear-gradient(rgba(181, 134, 247, 0.1) 1px, transparent 1px), 
        linear-gradient(to right, rgba(181, 134, 247, 0.1) 1px, rgba(255, 255, 255, 0) 1px);
    background-position: 0 0, 0 0;
    background-size: 20px 20px, 20px 20px;
    background-repeat: repeat, repeat;
    background-color: white; /* Add a white background to ensure contrast */
`;

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