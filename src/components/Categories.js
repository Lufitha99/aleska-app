import React from "react";

function Categories() {
  const categories = [
    { name: "sara", image: "url" },
    { name: "Hombres", image: "url" },
    { name: "sara", image: "url" },
    { name: "Hombres", image: "url" },
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <img src={category.image} alt={category.name} />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;
