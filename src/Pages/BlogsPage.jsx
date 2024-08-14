import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { BlocksContainer, FluidContainer, Heading, PrimaryButton } from '../Components/_Common/common.styles';
import BackButton from '../Components/BackButton/BackButton';
import { useCategories } from '../Hooks/useCategories';
import { usePosts } from '../Hooks/usePosts';
import { useRecentPosts } from '../Hooks/useRecentPosts';
import { Link } from 'react-router-dom';
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
    );
};


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