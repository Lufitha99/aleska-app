import React, { useState, useEffect } from "react";

function Testimonial() {
  const testimonials = [
    {
      text: `"Aleska Store tiene una diversa selección de ropa, joyería y electrónicos. El personal es amigable y siempre está listo para ayudar. La calidad de los productos es excelente, haciendo de Aleska una tienda favorita para muchos compradores."`,
      author: "Maria",
    },
    {
      text: `"He encontrado piezas únicas en Aleska Store que no se encuentran en ningún otro lado. Siempre es un placer visitar la tienda y ver sus nuevas colecciones."`,
      author: "Estefany",
    },
    {
      text: `"Excelente servicio y atención al cliente. Las recomendaciones del personal siempre son acertadas, y la calidad de los productos es inigualable. ¡Muy recomendado!"`,
      author: "Luisa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: "'Aboreto', sans-serif", marginBottom: '2%', borderBottom: '1px solid black',paddingBottom: '2px'}}> Lo que dicen nuestros clientes</h1>
      <div
      style={{
        backgroundColor: "#FBEEF8",
        padding: "60px",
        maxWidth: "4000px",
        margin: "auto",
        position: "relative",
        textAlign: "center",
        color: "black",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "40px",
      }}
    >

      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "#ff69b4",
          border: "none",
          color: "white",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ❮
      </button>

      <div>
        <p style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
          {testimonials[currentIndex].text}
        </p>
        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          - {testimonials[currentIndex].author}
        </p>
      </div>

      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "#ff69b4",
          border: "none",
          color: "white",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ❯
      </button>
    </div>
    </div>
    
  );
}

export default Testimonial;
