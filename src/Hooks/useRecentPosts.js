import { useState, useEffect } from 'react';
import { postsService } from '../Services/posts';

// Custom hook for fetching recent posts
export const useRecentPosts = () => {
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const fetchedRecentPosts = await postsService.getRecentPosts();
                setRecentPosts(fetchedRecentPosts);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchRecentPosts();
    }, []);

    return { recentPosts, loading, error };
};