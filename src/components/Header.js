import React from "react";
import KendallImage from "../Assets/Kendall.jpg";

function Header() {
  const headerStyle = {
    position: "relative",
    textAlign: "left",
  };

  const imgStyle = {
    width: "100%",
    filter: "brightness(0.9)",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    color: "Black",
  };

  const buttonStyle = {
    marginTop: "10px",
  };

  return (
    <header style={headerStyle}>
      <img src={KendallImage} alt="img" style={imgStyle} />
      <div style={contentStyle}>
        <h1>AlESKA</h1>
        <p>Estilo, elegancia</p>
        <button style={buttonStyle} className="shop-button">
          Shop now
        </button>
      </div>
    </header>
  );
}

export default Header;
