import React from "react";

function Gallery() {
  const images = ["image1_url", "image2_url", "image3_url"];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`gallery-${index}`} />
      ))}
    </div>
  );
}

export default Gallery;
