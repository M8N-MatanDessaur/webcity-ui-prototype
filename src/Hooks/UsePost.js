import { useState, useEffect } from 'react';
import { postsService } from '../Services/posts';

export const usePost = (slug, lang = 'en') => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await postsService.getPostBySlug(slug, lang); // Pass lang to the service
        setPost(fetchedPost[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, lang]);

  return { post, loading, error };
};
