import React from "react";
import KmodeloImage from "../Assets/Kmodelo.jpg";
import AccImage from "../Assets/Acc.jpg";

function Gallery() {
  const images = [KmodeloImage, AccImage];

  const imgStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    filter: "brightness(0.9)",
    marginBottom: "40px",
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`gallery-${index}`}
          style={imgStyle}
        />
      ))}
    </div>
  );
}

export default Gallery;
