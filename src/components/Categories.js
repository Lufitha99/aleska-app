import React from "react";
import AccesoriosImage from "../Assets/Accesorios.jpg";
import HombreImage from "../Assets/Hombre.jpg";
import KenImage from "../Assets/ken.jpg";
import Tecnologia from "../Assets/Tecnologia.jpg";

function Categories() {
  const categories = [
    { name: "JoyerÍa", image: AccesoriosImage },
    { name: "Ropa de Hombre", image: HombreImage },
    { name: "Ropa de Mujer", image: KenImage },
    { name: "Tecnología", image: Tecnologia },
  ];

  return (
    <div
      className="categories"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        marginBottom: "40px",
      }}
    >
      {categories.map((category, index) => (
        <div
          key={index}
          className="category"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={category.image}
            alt={category.name}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
            }}
          />
          <h3
            style={{ marginTop: "10px", fontSize: "1rem", textAlign: "center" }}
          >
            {category.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;
