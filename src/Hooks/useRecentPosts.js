import { useState, useEffect } from 'react';
import { postsService } from '../Services/posts';

export const useRecentPosts = (lang = 'en') => {
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const fetchedRecentPosts = await postsService.getRecentPosts(5, lang);
                setRecentPosts(fetchedRecentPosts);
            } catch (err) {
                console.log("Error fetching recent posts:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentPosts();
    }, [lang]); // Depend on lang to refetch when it changes

    return { recentPosts, loading, error };
};
