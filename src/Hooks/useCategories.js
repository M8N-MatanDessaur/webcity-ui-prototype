import { useState, useEffect } from 'react';
import { categoriesService } from '../Services/categories';

// Custom hook for fetching categories
export const useCategories = (lang = 'en') => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const fetchedCategories = await categoriesService.getCategories(lang);
          setCategories([{ _id: 'all', title: lang === 'en' ? 'All' : 'Tous' }, ...fetchedCategories]);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, [lang]); // Depend on lang to refetch when it changes
  
    return { categories, loading, error };
};
