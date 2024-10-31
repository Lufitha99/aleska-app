
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api/Categories'; // Asegúrate de que esta función esté definida en tu API


const CategoriesList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <nav className="nav flex-column">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`nav-link ${activeCategory === category.name ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category.name)}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
};

export default CategoriesList;
