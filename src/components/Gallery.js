import React, { useState } from "react";
import { Link } from "react-router-dom";
import KmodeloImage from "../Assets/Kmodelo.jpg";
import AccImage from "../Assets/Acc.jpg";
import styles from "../styles/Gallery.module.css"; 

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { src: KmodeloImage, text: "Luce Espectacular en Cada Ocasión", buttonText: "Ver Colección" },
    { src: AccImage, text: "Accesorios que Transforman tu Día a Día", buttonText: "Descubre Más" },
  ];

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img
            src={image.src}
            alt={`gallery-${index}`}
            className={styles.imgStyle}
          />
          <div className={styles.overlayStyle}>
            <h2 className={styles.title}>{image.text}</h2>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <button
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${styles.buttonStyle} ${hoveredIndex === index ? styles.buttonHover : ""}`}
              >
                {image.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
