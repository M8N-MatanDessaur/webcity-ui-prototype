import { CategoryFilterWrapper, CategoryButton } from './CategoryFilter.styles';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <CategoryFilterWrapper>
      {categories.map(category => (
        <CategoryButton
          key={category._id}
          onClick={() => setSelectedCategory(category.title)}
          isSelected={category.title === selectedCategory}
        >
          {category.title}
        </CategoryButton>
      ))}
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;