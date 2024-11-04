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
    fontWeight: "bold",
    marginTop: "30px",
  };

  const buttonStyle = {
    marginTop: "10px",
    backgroundColor: "#FEEBB8",
    border: "none",
    color: "Black",
    borderRadius: "25px",
    padding: "10px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginLeft: "-10px",
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
