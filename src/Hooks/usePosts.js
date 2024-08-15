import { useState, useEffect } from "react";
import { postsService } from "../Services/posts";

export const usePosts = (lang = 'en') => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const fetchedPosts = await postsService.getPosts(lang);
          setPosts(fetchedPosts);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, [lang]);
  
    return { posts, loading, error };
};
