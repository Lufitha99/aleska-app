import React from "react";
import { useNavigate } from "react-router-dom";
import AccesoriosImage from "../Assets/Accesorios.jpg";
import HombreImage from "../Assets/Hombre.jpg";
import KenImage from "../Assets/ken.jpg";
import Tecnologia from "../Assets/Tecnologia.jpg";
import styles from "../styles/Categories.module.css"; 

function Categories({ selectedCategory, setSelectedCategory }) { 
  const navigate = useNavigate();

  const categories = [
    { name: "Joyería", nameO: "jewelery", image: AccesoriosImage },
    { name: "Ropa de Hombre", nameO: "men's clothing", image: HombreImage },
    { name: "Ropa de Mujer", nameO: "women's clothing", image: KenImage },
    { name: "Tecnología", nameO: "electronics", image: Tecnologia },
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName); 
    navigate(`/products/${categoryName}`); 
  };

  return (
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <div
          key={index}
          className={`${styles.category} ${selectedCategory === category.nameO ? styles.active : ""}`} 
          onClick={() => handleCategoryClick(category.nameO)}
        >
          <img
            src={category.image}
            alt={category.name}
            className={styles.image}
          />
          <h3 className={styles.title}>{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;
