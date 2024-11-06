import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api/Categories'; 
const CategoriesNav = ({ selectedCategory, setSelectedCategory }) => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        const data = await getAllCategories();
        setCategories(data);
        console.log('Categorías establecidas en el estado:', data);
      };
      fetchCategories();
    }, []);

  return (
    <nav className="nav flex-column">
      <button 
        className={`nav-link ${selectedCategory === 'all' ? 'active' : ''}`} 
        onClick={() => setSelectedCategory('all')}
      >
        All
      </button>
      {categories.map((category) => (
        <button 
          key={category} 
          className={`nav-link ${selectedCategory === category ? 'active' : ''}`} 
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoriesNav;
