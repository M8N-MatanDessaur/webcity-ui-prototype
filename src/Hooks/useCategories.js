import { useState, useEffect } from 'react';
import { categoriesService } from '../Services/categories';

// Custom hook for fetching categories
export const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const fetchedCategories = await categoriesService.getCategories();
          setCategories([{ _id: 'all', title: 'All' }, ...fetchedCategories]);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []);
  
    return { categories, loading, error };
  };